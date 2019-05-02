import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import 'whatwg-fetch';
import Fab from '@material-ui/core/Fab';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { getdecodedToken } from '../../api/token.js';
class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
        decodedToken: getdecodedToken(),
        loggedin: false
    };

}

componentDidMount(){
  if(this.state.decodedToken){
    this.setState({
      loggedin: true
    })
  }
}

  render() {
      if (this.state.loggedin) {
        return <Redirect to='/Profile' />
      }
    return (
      <div>
     <Jumbotron fluid id="main">
      <h1>Becode <br/>Antwerpen</h1>
      <h1>PingPong <br/>Planner</h1>
      </Jumbotron>
      <hr/>
      <Jumbotron fluid id="main">
        <a href="/auth/github">
        <Fab id ="butn" >Login with Github</Fab>
        </a>
      </Jumbotron>
      </div>

    );
  }
}

export default Home;
