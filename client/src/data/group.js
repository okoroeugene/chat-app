const express = require('express');
const app = express();
const router = express.Router();
const groupModel = require('../../model/group');
const roomModel = require('../../model/room');
const currentDate = new Date();
const io = require('../../src/server').io;

// router.post('/joinroom', async function (req, res) {
//     req.body.date = currentDate;
//     await validateNickName(req.body.nickname, async (cb) => {
//         if (!cb) {
//             await groupModel.create(req.body, async (err, data) => {
//                 let chatRoomName = '';
//                 let nickName = data.nickname;
//                 await getRoomData(data.roomId, (cb) => {
//                     chatRoomName = cb;
//                     io.emit('join', nickName, chatRoomName);
//                     res.json(data);
//                 });
//             })
//         }
//         res.json(0);
//     })
// });

router.get('/roomData', (req, res) => {
    roomModel.findById(req.body.id, (err, data) => {
        res.json(data);
    })
})

module.exports = router;