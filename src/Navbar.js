import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import image from './Images/Logo_Small.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Row, Card } from 'react-bootstrap';

function getNavbar() {

    return(
        <>
        <Navbar className="nav" src={image} bg="dark" variant="dark">
          <Container>
            <Navbar.Brand to="#home"></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link to="#home">Objective</Nav.Link>
              <Nav.Link to="#features">Hanger</Nav.Link>
              <Nav.Link to="#pricing">Deployment</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
    );
}

export default getNavbar;