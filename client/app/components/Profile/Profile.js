import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
const Profile = () => (
    
    <div>
        <Header />
            <h1>Profile</h1>
        <Row>
            <Col>
            <div id="contain"></div>
            </Col>
            <Col>
            <h5>Name:<input></input></h5>
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
);

export default Profile;