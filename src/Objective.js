import React from 'react';
import object from './object.css';
import ReactDOM from 'react-dom';
import HangarPage from './Hangar';
import desert from './Images/desert.jpg';
import Aerial from './Images/Aerial.png';
import Ground from './Images/Ground.png';
import Subterranean from './Images/Subterranean.png';
import Goal from './Images/Goal.jpg';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Card, Col, Button } from 'react-bootstrap';

const Objective = () => {
    return (
        <Container>
            <Row>
                <h1 className="objTitle">Objective</h1>
                <Card className="locationCard" lg={12} xl={12}>
                    <h3 className="locationHead">Location</h3>
                    <Card.Body className="locationText">
                        <Row>
                            <Col>
                                Undisclosed Desert
                                <br />
                                <br />
                                Aerial- 7,500,000 (km2)
                                <br />
                                Ground - 8,000,000 (km2)
                                <br />
                                Subterranean - 5,000,000 (km2)
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum ipsum fringilla velit rutrum, ac maximus dui porttitor. Vestibulum varius pellentesque odio eu laoreet. Proin est metus, egestas id accumsan eu, semper ac urna. Nam ac auctor eros. Sed vestibulum libero ut tincidunt ornare. Donec fermentum lectus leo, tincidunt gravida augue laoreet ut.
                                <br />
                                <br />
                                Pellentesque sed libero vehicula, euismod nisl ac, vehicula lectus. Cras in ex laoreet, lacinia orci lobortis, varius dolor. Praesent ut metus semper, lacinia velit et, cursus diam. Nullam eu elit nec diam vehicula pretium. Vestibulum vel elit sed arcu tristique mollis vitae vehicula quam.
                            </Col>
                            <Col>
                                <img className="desertPic" src={desert} alt="desert picture" />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <h3 className="taskTitle">Task Choices</h3>
                <Col>
                    <Card className="cardTasks">
                        <Card.Img variant="top" src={Aerial} />
                        <Card.Body>
                            <Card.Title className="cardTitleTask">Aerial</Card.Title>
                            <h4 className="cardTextOne">Clear Drones</h4>
                            <Card.Text className="cardTextTwo">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lacus commodo, volutpat.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="cardTasks">
                        <Card.Img variant="top" src={Ground} />
                        <Card.Body>
                            <Card.Title className="cardTitleTask">Ground</Card.Title>
                            <h4 className="cardTextOne">Remove Stone Barriers</h4>
                            <Card.Text className="cardTextTwo">
                                Odio vel, pulvinar turpis. Vestibulum at efficitur elit. Morbi mattis erat vel auctor rutrum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="cardTasks">
                        <Card.Img variant="top" src={Subterranean} />
                        <Card.Body>
                            <Card.Title className="cardTitleTask">Subterranean</Card.Title>
                            <h4 className="cardTextOne">Tunnel to Checkpoint</h4>
                            <Card.Text className="cardTextTwo">
                                Donec quis lacus commodo, volutpat odio vel, pulvinar turpis. Morbi mattis erat vel auctor rutrum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Card className="goalCard">
                    <h3 className="goalTitle">Goal</h3>
                    <Card.Body>
                        <Row>
                            <Col>
                                <img className="goalImg" src={Goal} alt="Goal Picture" />
                            </Col>
                            <Col className="goalText">
                                You must clear all obstacles in your task list. Vestibulum varius pellentesque odio eu laoreet. Proin est metus, egestas id accumsan eu, semper ac urna. Nam ac auctor eros. Sed vestibulum libero ut tincidunt ornare. Donec fermentum lectus leo, tincidunt gravida augue laoreet ut.
                                <br />
                                <br />
                                Pellentesque sed libero vehicula, euismod nisl ac, vehicula lectus. Cras in ex laoreet, lacinia orci lobortis, varius dolor. Praesent ut metus semper, lacinia velit et, cursus diam. Nullam eu elit nec diam vehicula pretium. Vestibulum vel elit sed arcu tristique mollis vitae vehicula quam.
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Link className="hangarLink" to='./Hangar'>Proceed to Hanger</Link>
            </Row>
        </Container>
    );
}
export default Objective;