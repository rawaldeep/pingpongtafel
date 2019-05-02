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
import Reservation from './components/Reservation/Reservation';
import UpdateInfo from './components/UpdateInfo/UpdateInfo';
import Profile from './components/Profile/Profile'
import Home from './components/Home/Home';

import Overview from './components/Overview/Overview';
import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/> 
        {document.cookie ? <Route path="/Reservation" component={Reservation}/>: <Route component={Home}/> }
        {document.cookie ? <Route path="/Profile" component={Profile}/>: <Route component={Home}/> }
        {document.cookie ? <Route path="/Overview" component={Overview}/>: <Route component={Home}/> }
        {document.cookie ? <Route path="/UpdateInfo" component={UpdateInfo}/>: <Route component={Home}/> }
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
