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
            profilepic: ''
        };
        this.handleClick = this.handleClick.bind(this);

    }
  
    componentDidMount(){
        fetch('/api/users/'+this.state.decodedToken)
        .then(response => response.json())
        .then(response => {
            const{ Name, Profile_pic } = response
            console.log(response)
            this.setState({
                user: Name,
                profilepic: Profile_pic}
                )
        })
    }
   
        
        
    
    handleClick(e){
        e.preventDefault();
        this.setState({
            redirect: true});
        }

    render() {
        if(this.state.redirect){
            return <Redirect push to = '/Overview'/>;
        }
        return(
            <div>
        <Header />
            <h1>Profile</h1>
        <Row>
            <Col>
            <div id="contain">
            <img src= {this.state.profilepic} />
            </div>
            </Col>
            <Col>
            <h5>Name: {this.state.user}</h5>
            <h5>Group:
                <select>
                    <option></option>
                    <option>Ant-Lamarr</option>
                    <option>Ant-Giertz</option>
                </select>
            </h5>
            <button type="submit">submit</button>
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