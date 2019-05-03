import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Reservation extends React.Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return(
            <div id="formulier"><Form>
            <Form.Group  controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll share your email with anyone else.
              </Form.Text>
            </Form.Group>
          

            <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Number of players</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
    </Form.Control>
  </Form.Group>
           <Row>
             <Col></Col>
             <Col>
             <Button id="butn" type="submit">
              Submit
            </Button>
             </Col>
             <Col></Col>
           </Row>
           
          </Form>
            </div>
        );
    }
}

export default Reservation