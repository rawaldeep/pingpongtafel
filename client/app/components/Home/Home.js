import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
    
  }

  render() {
    return (
      <div>
       
        <br/><br/>
        <a href="/auth/github">Sign in with Github</a>
      </div>
    );
  }
}

export default Home;
