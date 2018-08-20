'use strict';

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MainLayout from '../src/components/MainLayout';

class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <MainLayout />
      </Router>
    );
  }
}

// const Parent = (props) => (
//   <div>
//     {props.children}
//   </div>
// );

export default AppRoutes;

