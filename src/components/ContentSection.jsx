/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeSections from '../pages/dashboard/HomeSections';

const ContentSection = ({ currentPage }) => {
  return (
    <div className="content-section d-flex align-items-center justify-content-center" style={{ width: '100%', height: '90%' }}>
      {currentPage === 'Home' && (
        <Container fluid>
          <Row className='justify-content-center' style={{ marginTop: '2rem' }}>
            <Col md={7}>
              <HomeSections />
            </Col>
          </Row>
        </Container>
      )}

      {currentPage === 'Anuidade' && (
        <Container fluid>
          <h5>Anuidade</h5>
          {/* Primeira linha de cards */}
          <Row className='justify-content-center' style={{ marginTop: '2rem' }}>
            <Col md={4}>
              <HomeSections />
            </Col>
            {/* Adicione os outros dois cards aqui */}
          </Row>

          {/* Segunda linha de cards */}
          <Row className='justify-content-center' style={{ marginTop: '2rem' }}>
            <Col md={4}>
              {/* Adicione o outro card aqui */}
            </Col>
            {/* Adicione os outros dois cards aqui */}
          </Row>
        </Container>
      )}
      {currentPage === 'ARTs' && <div>Conteúdo da página Contato</div>}
      {currentPage === 'Serviços' && <div>Conteúdo da página Serviços</div>}
      {currentPage === 'Atendimento Online' && <div>Conteúdo da página Configurações</div>}
      {/* Conteúdos das outras páginas aqui */}
    </div>
  );
};

export default ContentSection;
