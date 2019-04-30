import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from '@material-ui/core/Button';
import Cookies from 'js-cookie';
import decode from 'jwt-decode'
import axios from 'axios';
const decoded = decode(Cookies.get('token'));
const token = decoded
 class overview extends Component {
     
  constructor(props){
    super(props);
  this.state = {
    users: '',
    token: token
 }
}
conmponentDidMount(){
  axios.get('/api/account/profile',{ headers: { 'crossDomain': true, 'Content-Type': 'application/json' } })
  .then(res=> {
    this.setState({ users: res.data }).then(profileState => {
      console.log(JSON.stringify(this.state.users))
    }); //It sets the state asynchronously
  })
}

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
        <td>
        <Button>10:30</Button>
        <hr/>
        <Button>11:00</Button>
        <hr/>
        <Button >12:15</Button>
        <hr/>
        <Button>12:30</Button>
        <hr/>
        <Button>12:45</Button>
        <hr/>
        <Button>13:00</Button>
        <hr/>
        <Button>13:15</Button>
        <hr/>
        <Button>15:15</Button>
        <hr/>
        <Button>15:30</Button>
        </td>
        <td>
        <Button>10:30</Button>
        <hr/>
        <Button>11:00</Button>
        <hr/>
        <Button>12:15</Button>
        <hr/>
        <Button>12:30</Button>
        <hr/>
        <Button>12:45</Button>
        <hr/>
        <Button>13:00</Button>
        <hr/>
        <Button>13:15</Button>
        <hr/>
        <Button>15:15</Button>
        <hr/>
        <Button>15:30</Button>
        </td>
        <td><Button>10:30</Button>
        <hr/>
        <Button>11:00</Button>
        <hr/>
        <Button>12:15</Button>
        <hr/>
        <Button>12:30</Button>
        <hr/>
        <Button>12:45</Button>
        <hr/>
        <Button>13:00</Button>
        <hr/>
        <Button>13:15</Button>
        <hr/>
        <Button>15:15</Button>
        <hr/>
        <Button>15:30</Button></td>
        <td><Button>10:30</Button>
        <hr/>
        <Button>11:00</Button>
        <hr/>
        <Button>12:15</Button>
        <hr/>
        <Button>12:30</Button>
        <hr/>
        <Button>12:45</Button>
        <hr/>
        <Button>13:00</Button>
        <hr/>
        <Button>13:15</Button>
        <hr/>
        <Button>15:15</Button>
        <hr/>
        <Button>15:30</Button></td>
        <td><Button>10:30</Button>
        <hr/>
        <Button>11:00</Button>
        <hr/>
        <Button>12:15</Button>
        <hr/>
        <Button>12:30</Button>
        <hr/>
        <Button>12:45</Button>
        <hr/>
        <Button>13:00</Button>
        <hr/>
        <Button>13:15</Button>
        <hr/>
        <Button>15:15</Button>
        <hr/>
        <Button>15:30</Button></td>
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

