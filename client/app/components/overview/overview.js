import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron'
import TimeSlots from '../TimeSlots/TimeSlots';
import Cookies from 'js-cookie';
import decode from 'jwt-decode';
import axios from 'axios';
var id="midden";
const token = Cookies.get('token')
if(token){
  const decoded = decode(token);
  const tokenDecoded = decoded;
}
 class overview extends Component {
     
  constructor(props){
    super(props);
  this.state = {

 }
}
// conmponentDidMount(){
//   axios.get('/api/account/profile',{ headers: { 'crossDomain': true, 'Content-Type': 'application/json' } })
//   .then(res=> {
//     this.setState({ users: res.data }).then(profileState => {
//       console.log(JSON.stringify(this.state.users))
//     }); //It sets the state asynchronously
//   })
// }

  render() {
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
    )
  }
}
export default overview;

