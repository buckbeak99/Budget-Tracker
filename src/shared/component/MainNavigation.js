import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const MainNavigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Budget Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Sign In</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavigation;
