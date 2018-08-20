import React, { Component } from 'react';

class Friends extends Component {
    render() {
        return (
            <div class="row clearfix">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="body text-center">
                            <div class="chart easy-pie-chart-1" data-percent="75"> <span><img src={process.env.PUBLIC_URL + 'new/assets/img/sm/avatar1.jpg'} alt="user" class="rounded-circle" /></span> </div>
                            <h6>John Smith</h6>
                            <ul class="social-links list-unstyled">
                                <li><a title="facebook" href="javascript:void(0);"><i class="zmdi zmdi-facebook"></i></a></li>
                                <li><a title="twitter" href="javascript:void(0);"><i class="zmdi zmdi-twitter"></i></a></li>
                                <li><a title="instagram" href="javascript:void(0);"><i class="zmdi zmdi-instagram"></i></a></li>
                            </ul>
                            <small>795 Folsom Ave, Suite 600 San Francisco,<br /> CADGE 94107</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Friends;
