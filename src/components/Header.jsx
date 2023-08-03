/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from "../images/logo.png";
import creanet from "../images/creanet.png"
const Header = () => {
  return (
    <Navbar fixed="top" variant="dark" expand="lg" style={{height: '8rem', backgroundColor:'#004D8E'}}>
      <Container fluid>
        {/* Logo à esquerda */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo à esquerda"
            style={{ marginRight: '0rem',width:'20rem' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          {/* Logo à direita */}
          <Navbar.Brand href="#">
            <img
              src={creanet}
              alt="Logo à direita"
              style={{ marginLeft: '10px', width:'8rem' }}
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
