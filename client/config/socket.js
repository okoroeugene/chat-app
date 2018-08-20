const roomModel = require('../model/room');
const groupModel = require('../model/group');
const chatModel = require('../model/chat');
const currentDate = new Date();
const io = require('../src/server');

var allConnectedUsers = [];
module.exports = function (socket) {
    // socket.on('connected', function (user) { // add user data on connection
    //     var c = new Connect({
    //         socketId: socket.id,
    //         client: user
    //     })
    //     c.save(function (err, data) {
    //         if (err) console.log(err);
    //     });
    // })
    // socket.on('disconnect', function () { //remove user data from model when a socket disconnects
    //     Connect.findOne({ socketId: socket.id }).remove().exec();
    // })
    //Gets active chat Participants
    // var clients = socket.handshake.session.allClients;
    var currentCount = 0;
    socket.on('notify', function (nickname, content) {
        currentCount = currentCount + 1;
        getChatParticipants(nickname, content);
    });

    // var roster = io.sockets.clients('chatroom1');

    socket.on('join', async (nickName, roomId) => {
        var result = {
            nickname: nickName,
            roomId: roomId,
            date: currentDate
        }
        // console.log(roomId)
        await doesNameExist(nickName, async (cb) => {
            debugger;
            if (!cb) {
                await groupModel.create(result, async (err, data) => {
                    let chatRoomName = '';
                    let nickName = data.nickname;
                    await getRoomData(data.roomId, (cb) => {
                        chatRoomName = cb.name;
                        socket.join(chatRoomName);
                        socket.emit('join', { status: 1, data: data, chatRoomName: chatRoomName });
                    });
                })
            }
            else socket.emit('join', { status: 0 });
        })
    })

    socket.on('message', ((content, groupId, nickName, roomId) => {
        var result = {
            content: content,
            roomId: roomId,
            groupId: groupId,
            date: currentDate
        }
        chatModel.create(result, (err, data) => {
            groupModel.findById(data.groupId).populate('roomId').exec((err, group) => {
                chatModel.find({ roomId: roomId }, (err, chats) => {
                    // io.io.sockets.to(group.roomId.name).emit('message', chats, nickName);
                    // socket.nsp.to(group.roomId.name).emit('message', chats, nickName);
                    io.io.sockets.in(group.roomId.name).emit('message', chats, nickName)
                })
            })
        })
    }));

    socket.on('leave', (chatroomName) => {
        socket.emit('leave', chatroomName)
    })

    // socket.on('availableUsers', (roomName) => {
    //     var clients = io.io.sockets.adapter.rooms[roomName].sockets;
    //     socket.emit('availableUsers', clients)
    // })

    socket.on('room', function (id) {
        groupModel.findById(id).populate('roomId').exec((err, data) => {
            socket.join(data.roomId.name);
            socket.emit('room', data);
        })
    })

    socket.on('chats', function (id) {
        chatModel.find({ roomId: id }).populate('groupId').exec((err, data) => {
            socket.emit('chats', data);
        })
    })

    socket.on('typing', (nickname, roomname) => {
        socket.broadcast.to(roomname).emit('typing', nickname);
        // io.io.sockets.in(roomname).emit('typing', nickname)
        // socket.emit('typing', null)
    })

    function getRoomData(id, cb) {
        return roomModel.findById(id, (err, data) => {
            cb(data);
        })
    }

    function doesNameExist(name, cb) {
        return groupModel.findOne({ nickname: name }, (err, data) => {
            if (data) {
                cb(true);
            }
            else cb(false);
        })
    }

    function getChatParticipants(data, nickName) {
        groupModel.find({ roomId: data.roomId._id, nickname: { $ne: nickName } }).populate('roomId')
            .exec((err, convo) => {
                for (let i = 0; i < convo.length; i++) {
                    var result = {
                        'count': data.length,
                        'content': data
                    }
                    io.io.sockets.in(data.roomId.name).emit('message', nickName);
                }
            })
    }
};