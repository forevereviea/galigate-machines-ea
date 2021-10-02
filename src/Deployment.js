import React from 'react';
import ReactDOM from 'react-dom';
import deploy from './deploy.css';
import MainPageLogo from './Images/MainPageLogo.png';
import { Container, Row, Card, Col } from 'react-bootstrap';

const Deployment = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="deployTitle">Deployment</h1>
                    <Card className="successCard" xl={12} lg={12}>
                        <Card.Body className="successText">You have successfully completed your Information Form and Robot Customization. Your Simulation ID is #15676. Report to the Desert Quadrant Hangar on 09/12/68 for further training. Your official simulation date will be 9/15/68.</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
            <img xl={12} lg={12} className="mainLogoDeploy" src={MainPageLogo} alt="Main Logo"/>
            </Row>
        </Container>
    );
}
export default Deployment;