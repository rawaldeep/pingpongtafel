import React from 'react';
import Button from '@material-ui/core/Button/Button';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
class TimeSlots extends React.Component {
    constructor(props){
      super(props);
      this.state = {

      };
      this.handleClick = this.handleClick.bind(this);
      }
      handleClick(e) {
        e.preventDefault();
        console.log(e.currentTarget.dataset.day);
        this.setState({redirect: true});
    }
    render() {
      if (this.state.redirect) {
        return <Redirect push to="/Reservation" />;
      }
      return(
        <td>
          
      <Button data-day={this.props.day} onClick={this.handleClick}>10:30 </Button>
      <hr/>
      <Button onClick={this.handleClick}>11:00</Button>
      <hr/>
      <Button onClick={this.handleClick}>12:15</Button>
      <hr/>
      <Button onClick={this.handleClick}>12:30</Button>
      <hr/>
      <Button onClick={this.handleClick}>12:45</Button>
      <hr/>
      <Button onClick={this.handleClick}>13:00</Button>
      <hr/>
      <Button onClick={this.handleClick}>13:15</Button>
      <hr/>
      <Button onClick={this.handleClick}>15:15</Button>
      <hr/>
      <Button onClick={this.handleClick}>15:30</Button>
      </td>
      )
  }
}

export default TimeSlots