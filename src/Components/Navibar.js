import React from "react";

import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function Navibar() {

    const { t, i18n } = useTranslation();

    function clickLanguage(lang){
        i18n.changeLanguage(lang);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="p-0">
                <Navbar.Brand>
                    <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top mx-2"
                        
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link>
                        <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>{t("home-button")}</Link>
                    </Nav.Link>                    
                    <Nav.Link>
                        <Link to={"/writers"} style={{ color: 'inherit', textDecoration: 'inherit'}}>{t("writers-button")}</Link>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Nav>    
                    <NavDropdown title={t("language-button")} id="LangDropDown">
                        <NavDropdown.Item onClick={() => clickLanguage('ru')}>Ru</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => clickLanguage('en')}>Eng</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </>
    );
  }
  
  export default Navibar;