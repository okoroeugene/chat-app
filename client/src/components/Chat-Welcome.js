import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import io from 'socket.io-client'
const socket = io.connect('http://localhost:5001', {
    transports: ['websocket']
})

class ChatWelcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            nickName: null,
            roomId: null,
            isLoaded: false
        }
        // this.selection = props.values[0]
    }
    componentDidMount() {
        axios.get('http://localhost:5001/getrooms')
            .then(res => { this.setState({ rooms: res.data }) })
    }

    componentDidUpdate() {
        socket.on('join', (result) => {
            if (result.status === 1) {
                this.props.history.push('/chat-room/' + result.data._id)
            }
            else {
                alert('Nick name has been taken...');
            }
        })
    }

    handleSubmit(e) {
        let roomId = "";
        let radios = document.getElementsByName('room');
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                roomId = radios[i].value;
                break;
            }
        }
        socket.emit('join', this.refs.nickName.value, roomId);
        e.preventDefault();
    }

    selectRoom = (event) => {
        // this.setState({ roomId: event.target.value })
    }

    render() {
        const allRooms = this.state.rooms.map((items, i) =>
            <div className="fancy-radio custom-color-green" key={i}>
                <label><input ref="roomName" name="room" value={items._id} type="radio" /><span><i></i>{items.name}</span></label>
            </div>
        );

        return (
            <div id="wrapper">
                <div className="vertical-align-wrap">
                    <div className="vertical-align-middle auth-main">
                        <div className="auth-box">
                            <div className="top">
                                <img src={process.env.PUBLIC_URL + '/new/assets/img/logo-white.svg'} alt="Lucid" />
                            </div>
                            <div className="card">
                                <div className="header">
                                    <h3>
                                        <span className="clearfix title">
                                            <span className="number">Welcome,</span> <br />
                                            <span style={{ fontWeight: 300, color: '#656565' }}>Please join a chat room below and proceed to chat</span>
                                        </span>
                                    </h3>
                                </div>
                                <div className="body">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Nick Name</span>
                                        </div>
                                        <input ref="nickName" type="text" className="form-control" placeholder="enter a nickname" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <p><h4 className="text-center">Select a room to join</h4></p>
                                    <div className="col-lg-6 col-md-12">
                                        {allRooms}
                                    </div>
                                    <p>Apparently we're experiencing an error. But don't worry, we will solve it shortly.
                                <br />Please try after some time.</p>
                                    <p><a onClick={this.handleSubmit.bind(this)} href="javascript:void(0)" className="btn btn-primary"><i className="icon-arrow-right"></i> <span>Proceed</span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default ChatWelcome;
