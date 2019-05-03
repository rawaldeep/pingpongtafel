import React, { Component } from 'react';
import { getdecodedToken } from '../../api/token.js';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect }  from 'react-router';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            decodedToken: getdecodedToken(),
            user: '',
            team: ''
        };
        this.handleClick = this.handleClick.bind(this);

    }
  
    componentDidMount(){
        fetch('/api/users/'+this.state.decodedToken)
        .then(response => response.json())
        .then(response => {
            const{ Name, Team } = response
            console.log(response)
            this.setState({
                user: Name,
                team: Team}
                )
        })
    }
   
        
        
    
    handleClick(e){
        e.preventDefault();
        this.setState({
            redirect: true});
        }

    render() {
        if(this.state.team !== ''){
            return <Redirect push to = '/Profile'/>;
        }
        return(
            <div>
        <Header />
            <h1>Profile</h1>
        <Row>
        <Col>
        <form onSubmit={this.handleSubmit}>
        <label>
        <h5>Name:
          <input type="text" value= {this.state.user} onChange={this.handleChange} />
          </h5>
        </label>
        <h5>Group:
        <select value={this.state.team} onChange={this.handleChange}>
        <option selected hidden value=""> -- select an option -- </option>
  <option value="Ant-Lamarr">Ant-Lamarr</option>
  <option value="Ant-Giertz">Ant-Giertz</option>
</select>
            </h5>
        <input type="submit" value="Submit" />
      </form>
            </Col>
        </Row>
        <Footer />
        <h5>
           <button onClick={this.handleClick}>Overview</button>
        </h5>
        <h5>
            <a href="/logout">Logout</a>
        </h5>
    </div>
        )
    }
}

export default Profile;