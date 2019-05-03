import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron'
import TimeSlots from '../TimeSlots/TimeSlots';
import Button from '@material-ui/core/Button/Button';
import { Redirect } from 'react-router';
 class overview extends Component {
     
  constructor(props){
    super(props);
  this.state = {
    
 }
 this.handleClick = this.handleClick.bind(this);
}
handleClick(e) {
  e.preventDefault();
  this.setState({redirect: true, day:e.currentTarget.dataset.day})
  console.log(e.currentTarget.dataset.day)
}

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/Profile" />;
    }
    return (
      <div>
      <Header />
    
      <h1>PingPong Schedule</h1>
      <Jumbotron fluid >
    <Table bordered variant="dark" responsive="sm">
    <thead>
      <tr>
        <th>Maandag</th>
        <th>Dinsdag</th>
        <th>Woensdag</th>
        <th>Donderdag</th>
        <th>Vrijdag</th>
      </tr>
    </thead>
    <tbody>
      <tr id="midden">
        <TimeSlots/>
        <TimeSlots/>
        <TimeSlots/>
        <TimeSlots/>
        <TimeSlots/>
      </tr>
    </tbody>
  </Table>
  <h5>
      <a href="/Profile">Profile</a>
      </h5>
      <h5>
      <a href="/logout">Logout</a>
      </h5>
      </Jumbotron>
  
      <Footer />
  
</div>
    );
  }
}
export default overview;