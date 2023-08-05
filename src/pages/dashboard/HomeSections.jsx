/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import iconanuidade from "../../images/ic-anuidade.png";
import icarts from "../../images/ic-arts.png";
import icatendimentos from "../../images/ic-atendimentos.png";
import icmanutencao from "../../images/ic-manutencao.png";
import icservicos from "../../images/ic-servicos.png";
import icsolicitacoes from "../../images/ic-solicitacoes.png";
const HomeSections = ({ handlePageChange }) => {
  return (
    <div className='home-sections d-flex align-items-center justify-content-center'>
      <Container fluid>
        {/* Primeira linha de cards */}
        <Row className='d-flex justify-content-center' style={{width:'60vw', marginTop:'2rem'}}>
          <Col  style={{width:'23vw'}}>
            <Card className="rounded d-flex align-items-center justify-content-center" style={{ border: '2px solid #004D8E', backgroundColor: 'white', height: '30vh' }}>
              <Card.Title>
                <img src={iconanuidade} />
              </Card.Title>
              <Card.Subtitle>
                Anuidade
              </Card.Subtitle>
              <Card.Text className="col-6 text-center">
                Imprimir boletos de pagamentos de anuidades...
              </Card.Text>
            </Card>
          </Col>
          <Col style={{width:'23vw'}}>
          <a href="/arts">
            <Card 
            className="rounded d-flex align-items-center justify-content-center" 
            style={{ border: '2px solid #004D8E', backgroundColor: 'white', height: '30vh' }}
            onClick={() => handlePageChange('ARTs')}
            >

              <Card.Title>
                <img src={icarts} />
              </Card.Title>
              <Card.Subtitle>
                A.R.T.s
              </Card.Subtitle>
              <Card.Text className="col-6 text-center">
                Consultas, Preenchimento, Personalização...
              </Card.Text>
            </Card>
          </a>
          </Col>
          <Col style={{width:'23vw'}}>
          <Card className="rounded d-flex align-items-center justify-content-center" style={{ border: '2px solid #004D8E', backgroundColor: 'white', height: '30vh' }}>
              <Card.Title>
                <img src={icservicos} />
              </Card.Title>
              <Card.Subtitle>
                Serviços
              </Card.Subtitle>
              <Card.Text className="col-6 text-center">
                Consultas, Preenchimento, Personalização...
              </Card.Text>
            </Card>
          </Col>
        </Row>

        {/* Segunda linha de cards */}
        <Row className='justify-content-center' style={{width:'60vw', marginTop:'2rem'}}>
          <Col style={{width:'23vw'}}>
          <Card className="rounded d-flex align-items-center justify-content-center" style={{ border: '2px solid #004D8E', backgroundColor: 'white', height: '30vh' }}>
              <Card.Title>
                <img src={icatendimentos} />
              </Card.Title>
              <Card.Subtitle>
                Atendimento Online
              </Card.Subtitle>
              <Card.Text className="col-6 text-center">
                Currículo, Convênios, Dados do Profissional
              </Card.Text>
            </Card>
          </Col>
          <Col style={{width:'23vw'}}>
          <Card className="rounded d-flex align-items-center justify-content-center" style={{ border: '2px solid #004D8E', backgroundColor: 'white', height: '30vh' }}>
              <Card.Title>
                <img src={icsolicitacoes} />
              </Card.Title>
              <Card.Subtitle>
                Solicitações
              </Card.Subtitle>
              <Card.Text className="col-6 text-center">
                Currículo, Convênios, Dados do Profissional
              </Card.Text>
            </Card>
          </Col>
          <Col style={{width:'23vw'}}>
          <Card className="rounded d-flex align-items-center justify-content-center" style={{ border: '2px solid #004D8E', backgroundColor: 'white', height: '30vh' }}>
              <Card.Title>
                <img src={icmanutencao} />
              </Card.Title>
              <Card.Subtitle className='text-center'>
                Manutenção do Registro do Profissional
              </Card.Subtitle>
              <Card.Text className="col-6 text-center">
                Currículo, Convênios, Dados do Profissional
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeSections;
