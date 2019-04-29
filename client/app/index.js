import React, { Component } from 'react';
import { render } from 'react-dom';
// import Cookies from 'js-cookie';
import cookie from 'react-cookie'
import {
  BrowserRouter as Router,
  Route,
  Link,
  redirect,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import overview from './components/overview/overview';

import './styles/styles.scss';
// const checkAuth = ()=>{
// console.log(cookie.load('logged_in'))
// }
// checkAuth();
render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/> 
        {document.cookie ? <Route path="/overview" component={overview}/>: <Route component={Home}/> }
        {/* <Route path="/overview" component={overview}/> */}
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
