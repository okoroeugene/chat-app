import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { connect } from 'react-redux';
import { NewPhoto } from '../action/photo';

class AddService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      imgUrl: null,
      imgData: null
    }
  }
  handleClick() {
    const { description, imgData } = this.state;
    const formData = new FormData();
    formData.append('description', this.state.description);
    formData.append('file', this.state.imgData);
    axios.post('http://localhost:5001/api/newphoto', formData)
      .then(data => this.props.history.push('/'))
    // this.props.NewPhoto(this.state); 
  }

  handleChange(event) {
    this.setState({
      description: event.target.value
    })
  }
  handleFile(event) {
    var file = event.target.files[0];
    this.setState({
      imgData: file
    })
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    this.setState({ imgUrl: file });
    reader.onloadend = function (e) {
      this.setState({
        imgUrl: [reader.result]
      })
    }.bind(this);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-12">
            {/* <p className="mb-5"><img src={process.env.PUBLIC_URL + 'assets/images/img_bg_1.jpg'} alt="Free Bootstrap 4 Template by uicookies.com" className="img-fluid" /></p> */}

            <div className="row">
              <div className="col-xl-8 col-lg-12 mx-auto">
                <h1 className="mb-3">Contact</h1>

                <form className="probootstrap-form mb-5">
                  <div className="form-group mb-4">
                    <label htmlFor="message">Description</label>
                    <textarea onChange={this.handleChange.bind(this)} cols="30" rows="10" className="form-control" id="description" name="description"></textarea>
                  </div>
                  <div className="form-group">
                    {this.state.imgUrl !== null ? <img style={{ width: 120, height: 120, objectFit: 'contain' }} src={this.state.imgUrl} /> : ''}
                    {/* <label htmlFor="message">Image</label>  */}
                    <br />
                    <input type="file" name="img" onChange={this.handleFile.bind(this)} />
                  </div>
                  <div className="form-group">
                    <input type="button" onClick={this.handleClick.bind(this)} className="btn btn-primary" id="submit" name="submit" value="Send Message" />
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const MapStateToProps = (state) => ({
  photo: state.photo.content
})

const MapDispatchToProps = dispatch => {
  return {
    NewPhoto: (content) => dispatch(NewPhoto(content))
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(AddService);