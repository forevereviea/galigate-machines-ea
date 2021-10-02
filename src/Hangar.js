import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import hang from './hang.css';
import Deployment from './Deployment';
import Background from './BotGenterator/Background.jpg';
import Arm1 from './BotGenterator/BotArm1.png';
import Arm2 from './BotGenterator/BotArm2.png';
import Arm3 from './BotGenterator/BotArm3.png';
import Arm4 from './BotGenterator/BotArm4.png';
import Body1 from './BotGenterator/Body1.png';
import Body2 from './BotGenterator/Body2.png';
import Body3 from './BotGenterator/Body3.png';
import Body4 from './BotGenterator/Body4.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { Container, Row, Card, Col, Form, FloatingLabel, Button, ButtonGroup, ProgressBar } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'


const Hangar = () => {

    let arm = Arm1;
    let body = Body1;
    let armPower, armSpeed, armArmor, armLimit, bodyPower, bodySpeed, bodyArmor, bodyLimit, armWeight, bodyWeight;
    let totalPower = 0;

    function armChange(selectedArm) {
        console.log('You clicked to change arm to ' + selectedArm);
        if (selectedArm == 'arm1') {
            arm = Arm1;
            armPower = 20;
            armSpeed = 70;
            armArmor = 50;
            armLimit = 10;
            armWeight = 80;
        }
        if (selectedArm == 'arm2') {
            arm = Arm2;
            armPower = 50;
            armSpeed = 40;
            armArmor = 80;
            armLimit = 30;
            armWeight = 20;
        }
        if (selectedArm == 'arm3') {
            arm = Arm3;
            armPower = 75;
            armSpeed = 20;
            armArmor = 10;
            armLimit = 60;
            armWeight = 70;
        }
        if (selectedArm == 'arm4') {
            arm = Arm3;
            armPower = 80;
            armSpeed = 50;
            armArmor = 80;
            armLimit = 30;
            armWeight = 10;
        }
        totalPower = armPower + bodyPower;
        console.log(totalPower);
        document.getElementById("arm").src = arm;
    }

    function bodyChange(selectedBody) {
        console.log('You clicked to change body to ' + selectedBody);
        if (selectedBody == 'body1') {
            body = Body1;
            bodyPower = 20;
            bodySpeed = 90;
            bodyArmor = 20;
            bodyLimit = 60;
            bodyWeight = 80;
        }
        if (selectedBody == 'body2') {
            body = Body2;
            bodyPower = 50;
            bodySpeed = 60;
            bodyArmor = 10;
            bodyLimit = 20;
            bodyWeight = 40;
        }
        if (selectedBody == 'body3') {
            body = Body2;
            bodyPower = 30;
            bodySpeed = 70;
            bodyArmor = 30;
            bodyLimit = 30;
            bodyWeight = 90;
        }
        if (selectedBody == 'body4') {
            body = Body2;
            bodyPower = 80;
            bodySpeed = 60;
            bodyArmor = 30;
            bodyLimit = 30;
            bodyWeight = 100;
        }
        totalPower = armPower + bodyPower;
        console.log(totalPower);
        document.getElementById("body").src = body;
    }

    return (
        <Container>
            <h1 className="hangarTitle">Hanger</h1>
            <Row>
                <Card>
                    <Card.Body className="hangarCard1Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum ipsum fringilla velit rutrum, ac maximus dui porttitor. Vestibulum varius pellentesque odio eu laoreet. Proin est metus, egestas id accumsan eu, semper ac urna. Nam ac auctor eros. Sed vestibulum libero ut tincidunt ornare. Donec fermentum lectus leo, tincidunt gravida augue laoreet ut.
                        <br />
                        <br />
                        Pellentesque sed libero vehicula, euismod nisl ac, vehicula lectus. Cras in ex laoreet, lacinia orci lobortis, varius dolor. Praesent ut metus semper, lacinia velit et, cursus diam. Nullam eu elit nec diam vehicula pretium. Vestibulum vel elit sed arcu tristique mollis vitae vehicula quam.</Card.Body>
                </Card>
            </Row>
            <Row>
                <Accordion className="accordions" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="pilotAccordion">Pilot Information & Map Request</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label className="placeHolders">Pilot Name</Form.Label>
                                            <Form.Control className="placeHolders" type="Name" placeholder="Pilot Name" />
                                            <Form.Text className="text-muted">
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check className="placeHolders" type="checkbox" label="Keep anonymous in report." />
                                        </Form.Group>
                                        <span className="placeHolders">List skills and credentials</span>
                                        <Card className="skillsCard">
                                            <Card.Body>
                                                <br />
                                                <br />
                                                <br />
                                                <br />


                                                <br />

                                            </Card.Body>
                                        </Card>
                                        <Button className="saveRequestBtn" variant="primary" type="submit">
                                            Save Request Form
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicId">
                                            <Form.Label className="placeHolders">Pilot ID</Form.Label>
                                            <Form.Control className="placeHolders" type="id" placeholder="Pilot ID" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <span className="chooseMaps">Choose Desired Maps</span>
                                            </Col>
                                            <Col>
                                                <span className="chooseTwo">(Select at least 2)</span>
                                            </Col>
                                        </Row>


                                        <Card className="mapsCards">
                                            <Card.Body className="mapCardText">
                                                Cloudy Dusk- Aerial
                                                <br />

                                                Dunes - Ground
                                                <br />
                                                Stone Caves - Subterranean
                                                <br />

                                                Above the Trees - Aerial
                                                <br />

                                                Canyon - Ground
                                                <br />
                                                Bellow the Oasis - Subterranean
                                                <br />
                                            </Card.Body>
                                        </Card>
                                        <br />

                                    </Col>
                                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Keep anonymous in report." />
                                </Form.Group> */}
                                    {/* <Button variant="primary" type="submit">
                                Save Request Form
                                </Button> */}
                                </Row>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Row>
                    <Accordion className="accordions" defaultActiveKey="1">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="customizeHeader">Customize your robot</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col>
                                        {/* <h3>Customize your robot</h3> */}
                                        <Card className="parent">
                                            <Card.Img className="botBackground" variant="top" src={Background} />
                                            <Card.Img className="defaultArms" id="arm" variant="top" src={arm} />
                                            <Card.Img className="defaultBody" id="body" variant="top" src={body} />

                                        </Card>
                                        <Col>
                                            <Button className="saveBotBtn">Save Robot</Button>
                                        </Col>
                                    </Col>
                                    <Col>
                                        <h5 className="instructionsTitle">Instructions</h5>
                                        <Col>
                                            <span className="instructionText">Choose the body and arm combination to suit your task. Each body choice affects power and armor. Each arm choice affects Speed and Limit.</span>
                                            <br />
                                            <br />
                                            <span className="instructionText">• Power affects how much force the robot can exert</span>
                                            <br />
                                            <span className="instructionText">• Limit affects the amount of arm use per half hour</span>
                                            <br />
                                            <span className="instructionText">• Speed will show how quickly the robot can move</span>
                                            <br />
                                            <span className="instructionText">• Armor shows how much damage the body can take </span>
                                        </Col>
                                        <Row>
                                            <Col>
                                                <h5 className="selectBodyTxt">Select Body</h5>
                                                <ButtonGroup vertical>
                                                    <Button id="body1" className="bodyButtons" onClick={() => bodyChange('body1')}>Body One</Button>
                                                    <Button id="body2" className="bodyButtons" onClick={() => bodyChange('body2')}>Body Two</Button>
                                                    <Button id="body3" className="bodyButtons" onClick={() => bodyChange('body3')}>Body Three</Button>
                                                    <Button id="body4" className="bodyButtons" onClick={() => bodyChange('body4')}>Body Four</Button>
                                                </ButtonGroup>

                                                <Col>
                                                    <br />
                                                    <br />
                                                    <h5 className="specsText">Specs</h5>
                                                    <span> Weight: {armWeight + bodyWeight} KG</span>
                                                    <Card>
                                                        <Card.Body className="progressText">
                                                            <Row>
                                                            <Col>
                                                                Power:
                                                                <br />
                                                                <br />
                                                                Speed:
                                                                <br />
                                                                <br />
                                                                Armor:
                                                                <br />
                                                                <br />
     
                                                               
                                                                Limit:
                                                            </Col>
                                                            <Col>
                                                                <div>
                                                                    <ProgressBar variant="success" now={totalPower} />
                                                                    <br />
                                                                    <ProgressBar variant="info" now={20} />
                                                                    <br />
                                                                    <ProgressBar variant="warning" now={60} />
                                                                    <br />
                                                                    <ProgressBar variant="danger" now={80} />
                                                                </div>
                                                            </Col>
                                                            </Row>

                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Col>
                                            <Col>
                                                <h5 className="selectArmText">Select Arms</h5>
                                                <ButtonGroup vertical>
                                                    <Button className="bodyButtons" onClick={() => armChange('arm1')}>Arms One</Button>
                                                    <Button className="bodyButtons" onClick={() => armChange('arm2')}>Arms Two</Button>
                                                    <Button className="bodyButtons" onClick={() => armChange('arm3')}>Arms Three</Button>
                                                    <Button className="bodyButtons" onClick={() => armChange('arm4')}>Arms Four</Button>
                                                </ButtonGroup>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Link className="deploymentLink" to='./Deployment'>Proceed to Deployment</Link>
                </Row>
            </Row>
        </Container>
    );
}
export default Hangar;