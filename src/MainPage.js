import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.css';
import App from './App';
// import Modal from './Modal.js';
import { useHistory } from "react-router-dom";
import MainPageLogo from './Images/MainPageLogo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Card, Col, Image, Button, Modal } from 'react-bootstrap';


const MainPage = () => {
    const history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container fluid="md">
                <Row>
                    <Col xs={12}>
                        <Image src={MainPageLogo} className="mainLogo" />
                    </Col>
                    <Row>
                        <h1 className="welcomeTitle">Welcome Pilot #972</h1>
                        <p className="smallP">
                            You have been selected to participate in our simulation project. Please read the terms of your contract before moving forward to the objective page.
                        </p>
                        <Card className="scrollCard">
                            <h3 className="contractTitle">Deployment Contract</h3>
                            <Card.Body className="cardBody">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus pretium augue, at placerat augue finibus ut. Aliquam ac egestas ex, vitae sollicitudin dui. Sed iaculis nunc nec accumsan euismod. In quis sapien in elit ultricies elementum non nec justo. Aliquam ut venenatis arcu.
                                Suspendisse id tincidunt eros. Aliquam nisi turpis, efficitur vitae lorem et, lacinia molestie sem. Nullam non nulla fringilla sem porta porta consequat at lectus. Cras pretium turpis eget tortor imperdiet consequat. Donec mollis pulvinar dolor. Nunc placerat massa dui, ut pharetra ex consectetur id. Curabitur convallis ex ipsum, ac feugiat ante porta quis. Maecenas eget semper sapien, vel condimentum eros. Fusce varius hendrerit felis, quis lacinia eros bibendum non. Curabitur ipsum sem, mattis posuere vestibulum viverra, faucibus maximus quam. Ut id condimentum est. Maecenas interdum tortor non fringilla vestibulum. Pellentesque eu lacus sollicitudin, lacinia nulla nec, cursus ex. Sed gravida sodales ipsum, ornare ullamcorper velit pulvinar nec. Etiam lacinia lectus vel congue ultrices. Phasellus arcu erat, ultrices nec lectus in, efficitur tempor eros. Vivamus nec felis vestibulum odio consectetur egestas ut quis nisl. Aliquam non tempor quam. Morbi at orci massa. Nullam lectus eros, fermentum eget orci vitae, volutpat malesuada erat. Duis lobortis dignissim pellentesque. Fusce vel dignissim ligula, eget malesuada lorem. Etiam ullamcorper orci vitae interdum scelerisque. Aenean at sodales sapien, ac sollicitudin dolor. Pellentesque a nunc dui. Donec felis ligula, dictum id felis quis, lacinia vulputate leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum mi odio, sagittis sed vehicula sit amet, maximus ac nulla. Duis molestie odio eu mattis commodo. Aenean condimentum libero in libero efficitur, vel consectetur urna tristique. Duis sit amet molestie magna. Ut sed orci luctus augue consequat posuere. Fusce feugiat justo ac viverra imperdiet. Praesent sagittis, dolor vitae lacinia elementum, lectus neque imperdiet sem, at tempus mi lectus ac justo. Nulla mi dui, tristique at interdum non, rutrum ac nisl. Phasellus vel efficitur risus. Praesent sollicitudin porta risus, a tempus sem porta interdum. Donec quis augue et ipsum rhoncus tincidunt. Quisque congue ante in consequat ultrices. Quisque eu sem sit amet leo posuere blandit ut vel neque. Ut pharetra, enim sit amet tempus gravida, ipsum mauris bibendum arcu, et accumsan libero justo tincidunt libero. Aenean sit amet arcu eget enim efficitur elementum. Nulla et ultricies neque. Vestibulum at elit lectus. Sed sollicitudin lacinia turpis iaculis cursus. Vestibulum lobortis tellus leo, non dapibus nulla vehicula eget.</Card.Body>

                            <Button className="agreeBtn" onClick={handleShow}>Agree</Button>
                        </Card>
                    </Row>
                </Row>
            </Container>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="    ">Are You Sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    You're agreeing to a lot here.
                </Modal.Body>
                <Modal.Footer>
                    <Button  className="agreeBtn" variant="primary" onClick={() => history.push("./Objective")}>Agree</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default MainPage;