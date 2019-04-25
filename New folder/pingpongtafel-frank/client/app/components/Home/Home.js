import React, { Component } from 'react';
import 'whatwg-fetch';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
    
  }

  render() {
    return (
      <div>
       <main id="container">
       <h1>BeCode Antwerp</h1>
        <h1>PingPong Planner</h1>
        <Fab id ="butn" variant="extended" >
        <a href="/auth/github">Sign in with Github</a>
        </Fab>
        </main>
      </div>

    );
  }
}

export default Home;
