import React, { Component } from 'react';
import 'whatwg-fetch';
import Fab from '@material-ui/core/Fab';
import Jumbotron from 'react-bootstrap/Jumbotron';
class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      
    };
    
  }

  render() {
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
