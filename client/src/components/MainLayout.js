import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Header from './Header';
import Navbar from './Navbar';
import SideBar from './SideBar';

// handleRooms = () => {
//     var url = window.location.href.split('/')[2];
//     var socket = io.connect(url);
// }

const MainLayout = (props) => {
    return (
        <div>
            <Navbar />
            <SideBar />
            <div>
                <div id="main-content" class="profilepage_1">
                    <div class="container-fluid">
                        <div class="block-header">
                            <div class="row">
                                <div class="col-lg-5 col-md-8 col-sm-12">
                                    <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> Timeline</h2>
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                                        <li class="breadcrumb-item">Pages</li>
                                        <li class="breadcrumb-item active">Timeline</li>
                                    </ul>
                                </div>
                                <div class="col-lg-7 col-md-4 col-sm-12 text-right">
                                    <div class="inlineblock text-center m-r-15 m-l-15 hidden-sm">
                                        <div class="sparkline text-left" data-type="line" data-width="8em" data-height="20px" data-line-Width="1" data-line-Color="#00c5dc"
                                            data-fill-Color="transparent">3,5,1,6,5,4,8,3</div>
                                        <span>Visitors</span>
                                    </div>
                                    <div class="inlineblock text-center m-r-15 m-l-15 hidden-sm">
                                        <div class="sparkline text-left" data-type="line" data-width="8em" data-height="20px" data-line-Width="1" data-line-Color="#f4516c"
                                            data-fill-Color="transparent">4,6,3,2,5,6,5,4</div>
                                        <span>Visits</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
