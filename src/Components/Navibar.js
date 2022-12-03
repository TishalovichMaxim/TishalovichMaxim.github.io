import React from "react";

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navibar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Nav>    
                    <NavDropdown title="Lang" id="LangDropDown">
                        <NavDropdown.Item>Ru</NavDropdown.Item>
                        <NavDropdown.Item>Eng</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </>
    );
  }
  
  export default Navibar;