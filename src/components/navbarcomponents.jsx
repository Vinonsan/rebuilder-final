// NavbarComponent.jsx
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './style/navbarcomponents.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavbarComponent = ({ scrolled }) => {
  return (
    <Navbar expand="lg" className={`sticky-header ${scrolled ? 'scrolled' : ''}`}>
      <Container>
      <Navbar.Brand href="#">
          <img src={logo} alt="AI Website Builder" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#how-it-works">How It Works</Nav.Link>
            <Nav.Link href="#tech-stack">Tech Stack</Nav.Link>
            <Nav.Link href="#integrations">Integration</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <div className="nav-button glow-animation">
            <Link to="/dashboard" style={{ textDecoration: "none", color: "white" }}>Get Started</Link>
          </div>
        

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
