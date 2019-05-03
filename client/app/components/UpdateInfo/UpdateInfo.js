import React, { Component } from 'react';
import { getdecodedToken } from '../../api/token.js';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect }  from 'react-router';

class UndateInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            decodedToken: getdecodedToken(),
            userID: '',
            user: '',
            team: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
  
    componentDidMount(){
        fetch('/api/users/'+this.state.decodedToken)
        .then(response => response.json())
        .then(response => {
            const{_id, Name, Team } = response
            console.log(response)
            this.setState({
                userID: _id,
                user: Name,
                team: Team}
                )
        })
        // fetch('/api/usersupdate/'+this.state.decodedToken)
        // .then(response => response.json())
        // .then(response => {
        //     const{ Name, Team } = response
        //     console.log(response)
        //     this.setState({
        //         user: Name,
        //         team: Team}
        //         )
        // })
        
    }
    handleChange(e){
       
        console.log(e.currentTarget.value);

    }
    componentDidUpdate(){
        fetch('/api/usersupdate/'+this.state.userID, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => err);
    }
    handleSubmit(e){
        e.preventDefault();
        let name = document.getElementsByName('userName')[0].value;
        let Team = document.getElementsByName('team')[0].value;
        console.log('name is '+name+'team is '+Team);
        this.setState({
            user: name,
            team: Team  
        })

    }
   
        
        
    
    handleClick(e){
        e.preventDefault();
        this.setState({
            redirect: true});
        }

    render() {
        if(this.state.team !== ''){
            return <Redirect push to = '/Overview'/>;
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
          <input name="userName" type="text" defaultValue= {this.state.user} onChange={this.handleChange} />
          </h5>
        </label>
        <h5>Group:
        <select name="team" defaultValue={this.state.team} onChange={this.handleChange}>
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

export default UndateInfo;