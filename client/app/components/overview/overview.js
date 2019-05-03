import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron'
import TimeSlots from '../TimeSlots/TimeSlots';
import { getdecodedToken } from '../../api/token.js';
var id="midden";

 class overview extends Component {
     
  constructor(props) {
    super(props);

    this.state = {
        decodedToken: getdecodedToken(),
        redirect: false,
        userId: '',
        Team: ''
    };

}

componentDidMount(){
  fetch('/api/users/'+this.state.decodedToken)
  .then(response => response.json())
  .then(response => {
      const{ _id, Team } = response
      if(Team != ''){
        this.setState({
          userId: _id,
          Team: Team}
          )
      }
      else{
        this.setState({
          redirect: true
        })
      }
      
  })
}


  render() {
    if (this.state.redirect) {
      return <Redirect push to='/UpdateInfo' />
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
        <TimeSlots day="Maandag"/>
        <TimeSlots day="Dinsdag"/>
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
    )
  }
}
export default overview;

