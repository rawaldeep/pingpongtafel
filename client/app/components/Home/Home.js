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
        <a href="https://github.com/login/oauth/authorize?client_id=68b7722dbfbe7fea24cb">Sign in with Github</a>
      </div>
    );
  }
}

export default Home;
