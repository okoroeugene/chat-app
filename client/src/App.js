import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      isLoaded: false
    }
  }

  // <img className="card-img-top probootstrap-animate" src={`${process.env.PUBLIC_URL}/uploads/${items.image}`} />

  fetchPhoto() {
    axios.get('http://localhost:5001/api/showphotos')
      .then(res => {
        this.setState({ photos: res.data, isLoaded: true })
      })
  }
  componentDidMount() {
    this.fetchPhoto();
  }

  render() {
    // console.log(this.state.photos)
    // const listItems = this.state.photos.map((items, i) =>
    //   <div className="card">
    //     <Link to={'/single/' + items._id}>
    //       <img className="card-img-top probootstrap-animate" src={`${process.env.PUBLIC_URL}/uploads/${items.image}`} />
    //     </Link>
    //   </div>
    // )
    return (
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <h3 className="number count-to" data-from="0" data-to="128" data-speed="2000" data-fresh-interval="700" >128</h3>
              <p className="text-muted">New Project</p>
              <div className="progress progress-xs">
                <div className="progress-bar l-blue" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style={{ width: '68%' }}></div>
              </div>
              <small>Change 27%</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <h3 className="number count-to" data-from="0" data-to="758" data-speed="2000" data-fresh-interval="700" >758</h3>
              <p className="text-muted">Total Project</p>
              <div className="progress progress-xs">
                <div className="progress-bar l-green" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style={{ width: '68%' }}></div>
              </div>
              <small>Change 9%</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <h3 className="number count-to" data-from="0" data-to="2521" data-speed="2000" data-fresh-interval="700" >2521</h3>
              <p className="text-muted">Properties for Rent</p>
              <div className="progress progress-xs">
                <div className="progress-bar l-amber" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style={{ width: '68%' }}></div>
              </div>
              <small>Change 17%</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="body">
              <h3>$ 24,500</h3>
              <p className="text-muted">Total Earnings(Years)</p>
              <div className="progress progress-xs">
                <div className="progress-bar l-parpl" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style={{ width: '68%' }}></div>
              </div>
              <small>Change 13%</small>
            </div>
          </div>
        </div>
      </div>
      // this.state.isLoaded ?
      //   <div className="card-columns">
      //     {listItems}
      //   </div> : 'Hello'
    );
  }
}

export default App;
