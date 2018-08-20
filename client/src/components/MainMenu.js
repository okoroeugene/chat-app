import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class MainMenu extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            isLoaded: false
        }
    }

    render() {
        return (
            <div id="main_menu">
                <div className="container">
                    <nav className="version_2">
                        <div className="row">
                            <div className="col-md-3">
                                <h3>Home</h3>
                                <ul>
                                    <li>
                                        <a href="index.html">Home version 1</a>
                                    </li>
                                    <li>
                                        <a href="index-2.html">Home version 2</a>
                                    </li>
                                    <li>
                                        <a href="index-3.html">Home version 3</a>
                                    </li>
                                    <li>
                                        <a href="index-4.html">Home version 4</a>
                                    </li>
                                    <li>
                                        <a href="index-5.html">With Cookie bar (EU law)</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3>Courses</h3>
                                <ul>
                                    <li>
                                        <a href="courses-grid.html">Courses grid</a>
                                    </li>
                                    <li>
                                        <a href="courses-grid-sidebar.html">Courses grid sidebar</a>
                                    </li>
                                    <li>
                                        <a href="courses-list.html">Courses list</a>
                                    </li>
                                    <li>
                                        <a href="courses-list-sidebar.html">Courses list sidebar</a>
                                    </li>
                                    <li>
                                        <a href="course-detail.html">Course detail</a>
                                    </li>
                                    <li>
                                        <a href="course-detail-2.html">Course detail (working form)</a>
                                    </li>
                                    <li>
                                        <a href="admission.html">Admission wizard</a>
                                    </li>
                                    <li>
                                        <a href="teacher-detail.html">Teacher detail</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3>Pages</h3>
                                <ul>
                                    <li>
                                        <a href="http://www.ansonika.com/udema/index.html">Menu 1</a>
                                        <span className="badge_info">New</span>
                                    </li>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="login.html">Login</a>
                                    </li>
                                    <li>
                                        <a href="register.html">Register</a>
                                    </li>
                                    <li>
                                        <a href="contacts.html">Contacts</a>
                                    </li>
                                    <li>
                                        <a href="404.html">404 page</a>
                                    </li>
                                    <li>
                                        <a href="agenda-calendar.html">Agenda Calendar</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">Faq</a>
                                    </li>
                                    <li>
                                        <a href="help.html">Help</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3>Extra pages</h3>
                                <ul>
                                    <li>
                                        <a href="http://www.ansonika.com/udema/admin_section/index.html" target="_blank">Admin-Dashboard</a>
                                        <span className="badge_info">New</span>
                                    </li>
                                    <li>
                                        <a href="media-gallery.html">Media gallery</a>
                                    </li>
                                    <li>
                                        <a href="cart-1.html">Cart page 1</a>
                                    </li>
                                    <li>
                                        <a href="cart-2.html">Cart page 2</a>
                                    </li>
                                    <li>
                                        <a href="cart-3.html">Cart page 3</a>
                                    </li>
                                    <li>
                                        <a href="pricing-tables.html">Responsive pricing tables</a>
                                    </li>
                                    <li>
                                        <a href="coming_soon/index.html">Coming soon</a>
                                    </li>
                                    <li>
                                        <a href="icon-pack-1.html">Icon pack 1</a>
                                    </li>
                                    <li>
                                        <a href="icon-pack-2.html">Icon pack 2</a>
                                    </li>
                                    <li>
                                        <a href="icon-pack-3.html">Icon pack 3</a>
                                    </li>
                                    <li>
                                        <a href="icon-pack-4.html">Icon pack 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="follow_us">
                        <ul>
                            <li>Follow us</li>
                            <li>
                                <a href="#0">
                                    <i className="ti-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="ti-twitter-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="ti-google"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="ti-pinterest"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="ti-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu;
