import React, { Component } from 'react';

class Timeline extends Component {
    render() {
        return (
            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="body">
                            <div class="new_post">
                                <div class="form-group">
                                    <textarea rows="4" class="form-control no-resize" placeholder="Please type what you want..."></textarea>
                                </div>
                                <div class="post-toolbar-b">
                                    <button class="btn btn-warning"><i class="icon-link"></i></button>
                                    <button class="btn btn-warning"><i class="icon-camera"></i></button>
                                    <button class="btn btn-primary pull-right">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="body">
                            <div class="timeline-item green">
                                <span class="date">20-04-2018 - Today</span>
                                <h5>Hello, 'Im a single div responsive timeline without media Queries!</h5>
                                <span><a href="javascript:void(0);">Elisse Joson</a> San Francisco, CA</span>
                                <div class="msg">
                                    <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card.</p>
                                    <a href="javascript:void(0);" class="m-r-20"><i class="icon-heart"></i> Like</a>
                                    <a role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="icon-bubbles"></i> Comment</a>
                                    <div class="collapse m-t-10" id="collapseExample">
                                        <div class="well">
                                            <form>
                                                <div class="form-group">
                                                    <textarea rows="2" class="form-control no-resize" placeholder="Enter here for tweet..."></textarea>
                                                </div>
                                                <button class="btn btn-primary">Submit</button>
                                            </form>
                                        </div>
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

export default Timeline;
