import React, { Component } from 'react';
import axios from 'axios';
import '../assets/css/chatapp.css';
import '../assets/css/chat.css';
import io from 'socket.io-client'
const socket = io.connect('http://localhost:5001', {
    transports: ['websocket']
})
// const socket = io(`ws://localhost:5001`, {
//     transports: ['websocket']
// })

class ChatRoom extends Component {
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
            typingTimeout: 0,
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
        socket.on('typing', (nickname) => {
            // console.log(nickname + ' is typing')
            setTimeout(() => {
                this.setState({ isTyping: true, userTyping: nickname })
            }, 0);
        })

        // setTimeout(() => {
        //     this.stopTyping.bind(this);
        //     // alert('aaa')
        // }, 3000);
    }

    sendMessage() {
        socket.emit('message', this.refs.message.value, this.state.groupId, this.state.currentUser, this.state.roomId)
    }

    typing() {
        this.state.typingTimeout ? this.state.typingTimeout = 0 : '';
        socket.emit('typing', this.state.currentUser, this.state.chatRoomName)
    }

    // stopTyping() {
    //     this.setState({ isTyping: false })
    // }

    render() {
        let txtCenter = '';
        let floatRight = '';
        const chat = this.state.chats.map((items, i) =>
            <li className="clearfix">
                <div style={{ display: 'none' }}>
                    {items.groupId.nickname !== this.state.currentUser ? txtCenter = "text-right" : txtCenter === ''}
                    {items.groupId.nickname !== this.state.currentUser ? floatRight = "float-right" : floatRight === ''}
                </div>
                <div className={`message-data ${txtCenter}`}>
                    <span className="message-data-time" >10:10 AM, Today</span>
                </div>
                <div className={`message other-message ${floatRight}`}> {items.content} </div>
            </li>
        );
        return (
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card chat-app" style={{ marginTop: 40 }}>
                        <div id="plist" className="people-list">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="icon-magnifier"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Search..." />
                            </div>
                            <ul className="list-unstyled chat-list mt-2 mb-0">
                                <li className="clearfix active">
                                    <img src={'../../' + process.env.PUBLIC_URL + 'new/assets/img/xs/avatar2.jpg'} alt="avatar" />
                                    <div className="about">
                                        <div className="name">{this.state.currentUser}</div>
                                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <img src={'../../' + process.env.PUBLIC_URL + 'new/assets/img/xs/avatar1.jpg'} alt="avatar" />
                                    <div className="about">
                                        <div className="name">Vincent Porter</div>
                                        <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="chat">
                            <div className="chat-header clearfix">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                            <img src={'../../' + process.env.PUBLIC_URL + 'img/u1.png'} alt="avatar" />
                                        </a>
                                        <div className="chat-about">
                                            <h6 className="m-b-0">{this.state.chatRoomName} chat room</h6>
                                            <small>Active Participants: </small>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 hidden-sm text-right">
                                        <a href="javascript:void(0);" className="btn btn-outline-secondary"><i className="icon-camera"></i></a>
                                        <a href="javascript:void(0);" className="btn btn-outline-primary"><i className="icon-camcorder"></i></a>
                                        <a href="javascript:void(0);" className="btn btn-outline-info"><i className="icon-settings"></i></a>
                                        <a href="javascript:void(0);" className="btn btn-outline-warning"><i className="icon-question"></i></a>
                                        {/* <h5>{this.state.chatRoomName} chat room</h5> */}
                                    </div>
                                </div>
                            </div>
                            <div className="chat-history">
                                <ul className="m-b-0">
                                    {chat}
                                    {this.state.isTyping === true ? <div>
                                        <img style={{ width: 150 }} src={'../../' + `${process.env.PUBLIC_URL + 'img/87a6a474-418b-4762-93db-6f983c8bdb4f_rw_1200.gif'}`} />
                                        <br /><span className="typing">{this.state.userTyping} is typing</span>
                                    </div> : ''}
                                </ul>
                            </div>
                            <div className="chat-message clearfix">
                                <div className="input-group mb-0">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="icon-paper-plane"></i></span>
                                    </div>
                                    <input type="text" onChange={this.typing.bind(this)} ref="message" className="form-control" placeholder="Enter text here..." />
                                    <div class="input-group-append">
                                        <button onClick={this.sendMessage.bind(this)} class="btn btn-outline-secondary" type="button">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatRoom;
