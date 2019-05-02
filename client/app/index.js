import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  redirect,
  Switch
} from 'react-router-dom'
const jwt = require('jsonwebtoken');
import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Profile from './components/Profile/Profile'
import Home from './components/Home/Home';

import overview from './components/overview/overview';
import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/> 
        {document.cookie ? <Route path="/Profile" component={Profile}/>: <Route component={Home}/> }
        {document.cookie ? <Route path="/overview" component={overview}/>: <Route component={Home}/> }
        {/* <Route path="/overview" component={overview}/> */}
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
