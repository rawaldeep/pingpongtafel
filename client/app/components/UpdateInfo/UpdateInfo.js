import React, { Component } from 'react';
import { getdecodedToken } from '../../api/token.js';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            decodedToken: getdecodedToken(),
            user: '',
            profilepic: ''
        };

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

    render() {
        return(
            <div>
        <Header />
            <h1>Profile</h1>
        <Row>
            <Col>
            <div id="contain">
            <img id="contain" src= {this.state.profilepic} />
            </div>
            </Col>
            <Col>
            <h5>
            <label>
                Name: 
                <input type="text" name="name" value = {this.state.user} />
            </label>
            </h5>
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
            <a href="/overview">Overview</a>
        </h5>
        <h5>
            <a href="/">Logout</a>
        </h5>
    </div>
        )
    }
}

export default Profile;