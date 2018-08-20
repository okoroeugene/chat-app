import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Drawer extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            isLoaded: false
        }
    }

    render() {
        return (
            <aside id="rightmenu">
                <div role="tabpanel">
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active">
                            <a href="#chat" aria-controls="chat" role="tab" data-toggle="tab">Chat</a>
                        </li>
                        <li role="presentation">
                            <a href="#todo" aria-controls="todo" role="tab" data-toggle="tab">Todo</a>
                        </li>
                        <li role="presentation">
                            <a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="chat">
                            <div className="search">
                                <div className="form-group is-empty">
                                    <input type="text" className="form-control underline-input" placeholder="Search..." />
                                    <span className="material-input"></span>
                                </div>
                            </div>
                            <h6>Recent</h6>
                            <ul>
                                <li className="online">
                                    <div className="media">
                                        <a className="pull-left thumb thumb-sm" role="button" tabindex="0">
                                            <img className="media-object " src="%PUBLIC_URL%/new/assets/images/xs/avatar1.jpg" alt="" /> </a>
                                        <div className="media-body">
                                            <span className="name">Claire Sassu</span>
                                            <span className="message"> If you are going to use a passage of Lorem Ipsum</span>
                                            <span className="badge badge-outline status"></span>
                                        </div>
                                    </div>
                                </li>
                                <li className="online">
                                    <div className="media">
                                        <a className="pull-left thumb thumb-sm" role="button" tabindex="0">
                                            <img className="media-object " src="%PUBLIC_URL%/new/assets/images/xs/avatar8.jpg" alt="" /> </a>
                                        <div className="media-body">
                                            <div className="media-body">
                                                <span className="name">Maggie jackson</span>
                                                <span className="message">All the Lorem Ipsum generators on the Internet</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="online">
                                    <div className="media">
                                        <a className="pull-left thumb thumb-sm" role="button" tabindex="0">
                                            <img className="media-object " src="%PUBLIC_URL%/new/assets/images/xs/avatar3.jpg" alt="" /> </a>
                                        <div className="media-body">
                                            <div className="media-body">
                                                <span className="name">Joel King</span>
                                                <span className="message">The standard chunk of Lorem Ipsum used</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="online">
                                    <div className="media">
                                        <a className="pull-left thumb thumb-sm" role="button" tabindex="0">
                                            <img className="media-object " src="%PUBLIC_URL%/new/assets/images/xs/avatar6.jpg" alt="" /> </a>
                                        <div className="media-body">
                                            <div className="media-body">
                                                <span className="name">Isabella</span>
                                                <span className="message">There are many variations of passages of Lorem</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="online">
                                    <div className="media">
                                        <a className="pull-left thumb thumb-sm" role="button" tabindex="0">
                                            <img className="media-object " src="%PUBLIC_URL%/new/assets/images/xs/avatar5.jpg" alt="" /> </a>
                                        <div className="media-body">
                                            <div className="media-body">
                                                <span className="name">Alexander</span>
                                                <span className="message">Contrary to popular belief, Lorem Ipsum</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <h6>Contacts</h6>
                            <ul>
                                <li className="offline">
                                    <div className="media">
                                        <a className="pull-left thumb thumb-sm" role="button">
                                            <img className="media-object " src="%PUBLIC_URL%/new/assets/images/xs/avatar5.jpg" alt="" /> </a>
                                        <div className="media-body">
                                            <div className="media-body">
                                                <span className="name mt-5">Matthew</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="offline">
                                    <div className="media">
                                        <a className="pull-left thumb thumb-sm" role="button">
                                            <img className="media-object " src="%PUBLIC_URL%/new/assets/images/xs/avatar4.jpg" alt="" /> </a>
                                        <div className="media-body">
                                            <div className="media-body">
                                                <span className="name mt-5">Aaliyah</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="offline">
                                    <div className="media">
                                        <a className="pull-left thumb thumb-sm" role="button">
                                            <img className="media-object " src="%PUBLIC_URL%/new/assets/images/xs/avatar8.jpg" alt="" /> </a>
                                        <div className="media-body">
                                            <div className="media-body">
                                                <span className="name mt-5">Arianna</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="online">
                                    <div className="media">
                                        <a className="pull-left thumb thumb-sm" role="button">
                                            <img className="media-object " src="%PUBLIC_URL%/new/assets/images/xs/avatar9.jpg" alt="" /> </a>
                                        <div className="media-body">
                                            <div className="media-body">
                                                <span className="name mt-5">Scarlett</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="offline">
                                    <div className="media">
                                        <a className="pull-left thumb thumb-sm" role="button">
                                            <img className="media-object " src="%PUBLIC_URL%/new/assets/images/xs/avatar10.jpg" alt="" /> </a>
                                        <div className="media-body">
                                            <div className="media-body">
                                                <span className="name mt-5">David</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="todo">
                            <div className="form-group">
                                <input type="text" value="" placeholder="Create new task..." className="form-control" />
                                <span className="fa fa-plus"></span>
                            </div>
                            <h6>Today</h6>
                            <ul className="todo-list">
                                <li>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="optionsCheckboxes" /> Initialize the project</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="optionsCheckboxes" /> Create the main structure</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="optionsCheckboxes" /> Create the main structure</label>
                                    </div>
                                </li>
                            </ul>
                            <h6>Tomorrow</h6>
                            <ul className="todo-list">
                                <li>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="optionsCheckboxes" /> Initialize the project</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="optionsCheckboxes" /> Create the main structure</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="optionsCheckboxes" /> displayed in a normal space!</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="settings">
                            <h6>Chat Settings</h6>
                            <ul className="settings">
                                <li>
                                    <div className="form-group">
                                        <label className="col-xs-8 control-label">Show Offline Users</label>
                                        <div className="col-xs-4 control-label text-right">
                                            <div className="togglebutton">
                                                <label>
                                                    <input type="checkbox" checked="" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-group">
                                        <label className="col-xs-8 control-label">Show Fullname</label>
                                        <div className="col-xs-4 control-label text-right">
                                            <div className="togglebutton">
                                                <label>
                                                    <input type="checkbox" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-group">
                                        <label className="col-xs-8 control-label">History Enable</label>
                                        <div className="col-xs-4 control-label text-right">
                                            <div className="togglebutton">
                                                <label>
                                                    <input type="checkbox" checked="" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-group">
                                        <label className="col-xs-8 control-label">Show Locations</label>
                                        <div className="col-xs-4 control-label text-right">
                                            <div className="togglebutton">
                                                <label>
                                                    <input type="checkbox" checked="" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-group">
                                        <label className="col-xs-8 control-label">Notifications</label>
                                        <div className="col-xs-4 control-label text-right">
                                            <div className="togglebutton">
                                                <label>
                                                    <input type="checkbox" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-group">
                                        <label className="col-xs-8 control-label">Show Undread Count</label>
                                        <div className="col-xs-4 control-label text-right">
                                            <div className="togglebutton">
                                                <label>
                                                    <input type="checkbox" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}

export default Drawer;
