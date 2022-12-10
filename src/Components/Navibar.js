import React from "react";

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Navibar() {

    const { t, i18n } = useTranslation();

    function clickLanguage(lang){
        i18n.changeLanguage(lang);
      }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="p-0">
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
                    <Nav.Link href="/">{t("home-button")}</Nav.Link>
                    <Nav.Link href="writers">{t("writers-button")}</Nav.Link>
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