/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
// import logo from '../caminho/do/seu/logo.png';

const RightSection = () => {
    const logoUrl = 'https://logodownload.org/wp-content/uploads/2020/04/crea-sp-logo-0-2048x2048.png';
  return (
    <div className="right-section">
      <Container className="d-flex justify-content-center align-items-center h-100">
        <img 
            src={logoUrl} 
            alt="Logo" 
            style={{width:'12rem'}}
            />
      </Container>
    </div>
  );
};

export default RightSection;
