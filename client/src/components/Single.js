import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { connect } from 'react-redux';
import { NewPhoto } from '../action/photo';

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            data: []
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.setState({ id: this.props.match.params.id })
            axios.get('http://localhost:5001/api/getphoto/' + this.props.match.params.id)
                .then(res => {
                    this.setState({ data: res.data })
                })
        }
    }
    render() {
        return (
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-12">
                        {this.state.data.image ? <p class="mb-5"><img src={`${process.env.PUBLIC_URL}/uploads/${this.state.data.image}`} alt="Free Bootstrap 4 Template by uicookies.com" class="img-fluid" /></p> : null}
                        <div class="row">
                            <div class="col-xl-8 col-lg-12 mx-auto">
                                <h1 class="mb-5">{this.state.data.description}</h1>
                                {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

                                <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>

                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p> */}
                            </div>
                        </div>

                    </div>
                </div>

                {/* <section class="probootstrap-section">
                    <div class="container-fluid">
                        <div class="row mb-5 justify-content-center">
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-8 mx-auto">
                                        <h2 class="h1 mb-5 mt-0">Related Projects</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-md-12">
                                <div class="owl-carousel probootstrap-owl">
                                    <div class="item">
                                        <img src="images/img_2.jpg" class="img-fluid" alt="Free Template by uicookies.com" />
                                        <div class="p-4 border border-top-0">
                                            <h4>Craig Smith</h4>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src="images/img_3.jpg" class="img-fluid" alt="Free Template by uicookies.com" />
                                        <div class="p-4 border border-top-0">
                                            <h4>Peter Wood</h4>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src="images/img_4.jpg" class="img-fluid" alt="Free Template by uicookies.com" />
                                        <div class="p-4 border border-top-0">
                                            <h4>James Carl</h4>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src="images/img_5.jpg" class="img-fluid" alt="Free Template by uicookies.com" />
                                        <div class="p-4 border border-top-0">
                                            <h4>Craig Smith</h4>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        );
    }
}

// const MapStateToProps = (state) => ({
//     photo: state.photo.content
// })

// const MapDispatchToProps = dispatch => {
//     return {
//         NewPhoto: (content) => dispatch(NewPhoto(content))
//     }
// }

export default Single;