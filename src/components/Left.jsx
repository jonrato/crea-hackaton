/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import imageLogin from "../images/imageLogin.png"

const LeftSection = () => {
    const logoUrl = 'https://logodownload.org/wp-content/uploads/2020/04/crea-sp-logo-0-2048x2048.png';
  return (
    <div 
    className="right-section"
    style={{
      backgroundImage: `url(${imageLogin})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginTop:'10vh',
      width: '50vw',
      height: '90vh', // Ajuste a altura conforme necessário
    }}
    >
      <Container 
      className="d-flex justify-content-center align-items-center h-100"
      >
        <h4 className='col-6' style={{marginTop:'25vh'}}>
          Informe o número do seu registro do CREA ou CPF para acessar
          sua conta no CREA-SP
        </h4>
      </Container>
    </div>
  );
};

export default LeftSection;
