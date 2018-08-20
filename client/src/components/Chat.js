import React, { Component } from 'react';
import '../assets/css/chatapp.css';
import '../assets/css/chat.css';
import io from 'socket.io-client'
const socket = io.connect('http://localhost:5001', {
    transports: ['websocket']
})

class Chat extends Component {
    constructor() {
        super();
        this.state = {
            roomId: null,
            groupId: null,
            chatRoomName: null,
            newUser: null,
            currentUser: null,
            numberOfUsers: null,
            activeUsers: [],
            isTyping: false,
            userTyping: null,
            chats: []
        }
    }
    componentDidMount() {
        socket.on('chats', (result) => { this.setState({ chats: result }) })
        socket.on('join', (nickName) => { this.setState({ newUser: nickName }) })
        socket.emit('room', this.props.match.params.id);
        socket.on('room', (data) => {
            if (data) {
                this.setState({ chatRoomName: data.roomId.name, currentUser: data.nickname, groupId: data._id, roomId: data.roomId._id })
                socket.emit('chats', data.roomId._id);
            }
        })
    }

    componentDidUpdate() {
        if (this.state.chatRoomName) {
            socket.emit('availableUsers', this.state.chatRoomName);
        }
        socket.on('availableUsers', (result) => {
            // console.log(result);
        })
        socket.on('message', (content, nickName) => {
            if (this.refs.message.value) {
                this.refs.message.value = '';
            }
            this.state.chats = [];
            this.setState({ chats: content })
        })
        // socket.on('typing', (nickname) => {
        //     this.setState({ isTyping: true, userTyping: nickname })
        // })
    }

    sendMessage() {
        socket.emit('message', this.refs.message.value, this.state.groupId, this.state.currentUser, this.state.roomId)
    }

    typing() {
        socket.emit('typing', this.state.currentUser, this.state.chatRoomName)
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Chat;