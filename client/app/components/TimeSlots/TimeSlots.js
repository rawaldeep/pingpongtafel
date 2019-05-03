import React from 'react';
import Button from '@material-ui/core/Button/Button';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
class TimeSlots extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        timeSlots: [
          {id:1, time:10.30} ,
          {id:2, time:11.00},
          {id:3, time:12.15},
          {id:4, time:12.30},
          {id:5, time:12.45},
          {id:6, time:13.00},
          {id:7, time:13.15},
          {id:8, time:15.15},
          {id:9, time:15.30}]
      };
      this.handleClick = this.handleClick.bind(this);
      }
      handleClick(e) {
        e.preventDefault();
        this.setState({redirect: true});
    }
    render() {
      const times = this.state.timeSlots.map((tijd, key) =>
    <span><Button key={tijd.id} onClick={this.handleClick}> {tijd.time}</Button><hr/>
    </span> );
      
      
      if (this.state.redirect) {
        return <Redirect push to="/Reservation" />;
      }
      return(
        <td>
        {times}
        </td>
      )
  }
}

export default TimeSlots