import './App.css';
import React from 'react';
import image from './Images/Logo_Small.png';
// import Navbar from './Navbar'; 
import MainPage from './MainPage';
// import Modal from './Modal';
import Objective from './Objective';
import Hangar from './Hangar';
import Deployment from './Deployment';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import HomepageBackground from './Images/HomepageBackground.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from 'react-bootstrap';

// import { bootstrap } from 'react-bootstrap';

function App() {

  return (
    <>
      <div className="App">
        <Router>
          <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" fixed="top" bg="dark" variant="dark">
            <Container>
              <NavLink to="/MainPage">
                <img src={image} className="smallLogo"/>
                </NavLink>
              <Nav className="me-auto">
                <NavLink className="navLink" to="/Objective">Objective</NavLink>
                <NavLink className="navLink" to="/Hangar">Hangar</NavLink>
                <NavLink  className="navLink" to="/Deployment">Deployment</NavLink>
              </Nav>
            </Container>
          </Navbar>

          <Navbar className="navbar fixed-bottom justify-content-center navbar-expand-lg navbar-dark bg-dark" fixed="bottom" bg="dark" variant="dark">
          Copyright © Galigate Machines
        </Navbar>
        

          <Switch>
          <Route exact path="/MainPage" component={MainPage} />
        
            <Route path="/Objective" component={Objective} />

            <Route path="/Hangar" component={Hangar} />

            <Route path="/Deployment" component={Deployment} />

          </Switch>
        </Router>
      </div >
    </>
  );
}

export default App;
