import React, { Component } from 'react';
import { getdecodedToken } from '../../api/token.js';
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
            <h1 id="profHeader"> {this.state.user}'s Profile</h1>
        <Row>
            <Col>
            </Col>
            <Col>
           
            <img id="profielfoto" src= {this.state.profilepic} />
            
            </Col>
            <Col>
          
            </Col>
        </Row>

        <Row>
            <Col></Col>
            <Col>
            <div id="profieltje">
             <h5>Name: {this.state.user}</h5>
            <h5>Group: <br />
                <select>
                    <option></option>
                    <option>Ant-Lamarr</option>
                    <option>Ant-Giertz</option>
                </select>
            </h5>
            <button type="submit">submit</button>
            </div></Col>
            
            <Col></Col>
        </Row>
    
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