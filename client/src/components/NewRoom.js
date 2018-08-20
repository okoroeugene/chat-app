import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import axios from 'axios';

class NewRoom extends Component {
    constructor() {
        super();
        this.state = {
            name: null
        }
    }
    handleClick() {
        var req = {
            name: this.state.name
        }
        axios.post('http://localhost:5001/addroom', req)
            .then(res => {
                res.data === 1 ? this.props.history.push('/chat-welcome') : ''
            })
    }
    handleName(event) {
        this.setState({ name: event.target.value })
    }
    render() {
        return (
            <div class="row clearfix">
                <div class="col-lg-6 col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2> New Chat Room</h2>
                        </div>
                        <div class="body">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Room Name</span>
                                </div>
                                <input onChange={this.handleName.bind(this)} type="text" class="form-control" placeholder="enter room name" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <p><a onClick={this.handleClick.bind(this)} href="javascript:void(0)" class="btn btn-primary"><i class="icon-arrow-right"></i> <span>Create</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewRoom;
