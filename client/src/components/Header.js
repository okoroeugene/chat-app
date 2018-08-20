import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            isLoaded: false
        }
    }
    render() {
        return (
            <div>
                <div id="header">
                    <header className="clearfix">
                        <div className="branding">
                            <a className="brand" href="index-2.html">
                                <span>Falcon</span>
                            </a>
                            <a role="button" tabindex="0" className="offcanvas-toggle visible-xs-inline">
                                <i className="fa fa-bars"></i>
                            </a>
                        </div>

                        <ul className="nav-left pull-left list-unstyled list-inline">
                            <li className="leftmenu-collapse">
                                <a role="button" tabindex="0" className="collapse-leftmenu">
                                    <i className="fa fa-outdent"></i>
                                </a>
                            </li>
                            <li className="dropdown leftmenu-collapse">
                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-language"></i>
                                </a>
                                <div className="dropdown-menu pull-left panel-default pt-0 pb-0" role="menu">
                                    <ul className="list-group mb-0">
                                        <li className="list-group-item">
                                            <a href="javascript:void(0);" className="p-0 m-0" >English</a>
                                        </li>
                                        <li className="list-group-item">
                                            <a href="javascript:void(0);" className="p-0 m-0" >Spanish</a>
                                        </li>
                                        <li className="list-group-item">
                                            <a href="javascript:void(0);" className="p-0 m-0" >Chinese</a>
                                        </li>
                                        <li className="list-group-item">
                                            <a href="javascript:void(0);" className="p-0 m-0" >Arabic</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="dropdown leftmenu-collapse">
                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-plus mr-5"></i>New
                        </a>
                                <div className="dropdown-menu pull-left panel panel-default" role="menu">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <a role="button" className="media">
                                                <span className="pull-left media-object">
                                                    <i className="fa fa-briefcase"></i>
                                                </span>
                                                <div className="media-body">
                                                    <span className="block">New Campaign</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a role="button" className="media">
                                                <span className="pull-left media-object">
                                                    <i className="fa fa-area-chart"></i>
                                                </span>
                                                <div className="media-body">
                                                    <span className="block">Generate Report</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a role="button" className="media">
                                                <span className="pull-left media-object">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                                <div className="media-body">
                                                    <span className="block">Add New User</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a role="button" className="media">
                                                <span className="pull-left media-object">
                                                    <i className="fa fa-file-text"></i>
                                                </span>
                                                <div className="media-body">
                                                    <span className="block">Create Page</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <div className="search" id="main-search">
                            <input type="text" className="form-control underline-input" placeholder="Explore Falcon..." />
                        </div>

                        <ul className="nav-right pull-right list-inline">
                            <li className="dropdown users">
                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-th"></i>
                                </a>
                                <div className="dropdown-menu pull-right panel panel-default" role="menu">
                                    <ul className="app-sortcut">
                                        <li>
                                            <a href="#" className="connection-item">
                                                <i className="fa fa-umbrella"></i>
                                                <span className="block">Weather</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-widgets.html" className="connection-item">
                                                <i className="fa fa-object-ungroup"></i>
                                                <span className="block">Widget</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="calendar.html" className="connection-item">
                                                <i className="fa fa-calendar-check-o"></i>
                                                <span className="block">calendar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="maps-google.html" className="connection-item">
                                                <i className="fa fa-map-o"></i>
                                                <span className="block">map</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="chat.html" className="connection-item">
                                                <i className="fa fa-comments-o"></i>
                                                <span className="block">chat</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="connection-item">
                                                <i className="fa fa-book"></i>
                                                <span className="block">contact</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="dropdown messages">
                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope"></i>
                                    <div className="notify">
                                        <span className="heartbit"></span>
                                        <span className="point"></span>
                                    </div>
                                </a>
                                <div className="dropdown-menu pull-right panel panel-default" role="menu">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <a role="button" tabindex="0" className="media">
                                                <span className="pull-left media-object thumb thumb-sm">
                                                    <img src={`${process.env.PUBLIC_URL}/new/assets/images/pi-avatar.jpg`} alt="" /> </span>
                                                <div className="media-body">
                                                    <span className="block">Lucas sent you a message</span>
                                                    <small className="text-muted">9 minutes ago</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a role="button" tabindex="0" className="media">
                                                <span className="pull-left media-object  thumb thumb-sm">
                                                    <img src={`${process.env.PUBLIC_URL}/new/assets/images/Jane-avatar.jpg`} alt="" /> </span>
                                                <div className="media-body">
                                                    <span className="block">Jane sent you a message</span>
                                                    <small className="text-muted">27 minutes ago</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a role="button" tabindex="0" className="media">
                                                <span className="pull-left media-object  thumb thumb-sm">
                                                    <img src={`${process.env.PUBLIC_URL}/new/assets/images/random-avatar1.jpg`} alt="" /> </span>
                                                <div className="media-body">
                                                    <span className="block">Lee sent you a message</span>
                                                    <small className="text-muted">2 hour ago</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a role="button" tabindex="0" className="media">
                                                <span className="pull-left media-object  thumb thumb-sm">
                                                    <img src={`${process.env.PUBLIC_URL}/new/assets/images/random-avatar3.jpg`} alt="" /> </span>
                                                <div className="media-body">
                                                    <span className="block">Rihtik sent you a message</span>
                                                    <small className="text-muted">8 hours ago</small>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="panel-footer">
                                        <a role="button" tabindex="0">Show all messages
                                    <i className="pull-right fa fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown notifications">
                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bell"></i>
                                    <div className="notify">
                                        <span className="heartbit"></span>
                                        <span className="point"></span>
                                    </div>
                                </a>
                                <div className="dropdown-menu pull-right panel panel-default">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <a role="button" tabindex="0" className="media">
                                                <span className="pull-left media-object media-icon">
                                                    <i className="fa fa-ban"></i>
                                                </span>
                                                <div className="media-body">
                                                    <span className="block">User Lucas cancelled account</span>
                                                    <small className="text-muted">12 minutes ago</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a role="button" tabindex="0" className="media">
                                                <span className="pull-left media-object media-icon">
                                                    <i className="fa fa-spotify"></i>
                                                </span>
                                                <div className="media-body">
                                                    <span className="block">2 voice mails</span>
                                                    <small className="text-muted">Neque porro quisquam est</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a role="button" tabindex="0" className="media">
                                                <span className="pull-left media-object media-icon">
                                                    <i className="fa fa-whatsapp"></i>
                                                </span>
                                                <div className="media-body">
                                                    <span className="block">8 voice messanger</span>
                                                    <small className="text-muted">8 texts</small>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="panel-footer">
                                        <a role="button" tabindex="0">Show all notifications
                                    <i className="fa fa-angle-right pull-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown nav-profile">
                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src={`${process.env.PUBLIC_URL}/new/assets/images/profile-photo.jpg`} alt="" className="0 size-30x30" /> </a>
                                <ul className="dropdown-menu pull-right" role="menu">
                                    <li>
                                        <div className="user-info">
                                            <div className="user-name">Alexander</div>
                                            <div className="user-position online">Available</div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="profile.html" role="button" tabindex="0">
                                            <span className="label label-success pull-right">80%</span>
                                            <i className="fa fa-user"></i>Profile</a>
                                    </li>
                                    <li>
                                        <a role="button" tabindex="0">
                                            <span className="label label-info pull-right">new</span>
                                            <i className="fa fa-check"></i>Tasks</a>
                                    </li>
                                    <li>
                                        <a role="button" tabindex="0">
                                            <i className="fa fa-cog"></i>Settings</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="locked.html" role="button" tabindex="0">
                                            <i className="fa fa-lock"></i>Lock</a>
                                    </li>
                                    <li>
                                        <a href="login.html" role="button" tabindex="0">
                                            <i className="fa fa-sign-out"></i>Logout</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="toggle-right-leftmenu">
                                <a role="button" tabindex="0">
                                    <i className="fa fa-align-left"></i>
                                </a>
                            </li>
                        </ul>
                    </header>
                </div>
            </div>
        );
    }
}

export default Header;
