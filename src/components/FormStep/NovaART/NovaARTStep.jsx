/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, ProgressBar, Button, Container, Row, Col } from 'react-bootstrap';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import Sidebar from '../../Sidebar';
import Header from '../../Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const NovaARTStep = () => {
    const [step, setStep] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    
  const totalSteps = 4;

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar o formulário
  };


  return (
    
    <div style={{marginTop:'13vh' ,position: 'relative', display: 'flex', flexDirection: 'row' }}>
    <div style={{ height: '13vh' }}>
      <Header />
    </div>
    <Container fluid style={{ height: '93.5vh' }}>
      <Row>

      <div
        className="bg-warning sidebar-shadow"
        style={{
          width: isSidebarOpen?'20vw':'0vw', // Largura do Sidebar quando aberto
          backgroundColor: 'rgba(0, 0, 128, 0.8)',
          color: 'black',
          height: 'calc(100vh - 60px)',
          transition: 'width 0.3s ease-in-out', // Adiciona uma transição suave para o width
        }}
      >
        {/* Botão para minimizar/maximizar o Sidebar */}
        <button
          onClick={handleToggleSidebar}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            marginTop:'1rem',
            padding: '.5rem',
            zIndex: 999, // Certifique-se de que o botão fique acima do conteúdo do Sidebar
            alignSelf: 'center', // Centralizar verticalmente o botão ao lado do Sidebar
            marginRight: isSidebarOpen ? '1rem' : '-3rem', // Define o espaçamento entre o botão e o Sidebar aberto ou fechado
            transition: 'margin-right 0.3s ease-in-out', // Adiciona uma transição suave para o espaçamento
          }}
        >
          <FontAwesomeIcon icon={isSidebarOpen ? faChevronLeft : faChevronRight} />
        </button>
        {isSidebarOpen ?
          <Sidebar/> :
          null
        }
        </div>
        <Col md={9}>
          <div className='d-flex align-items-center justify-content-center'>
          <Container fluid>
            <Row
              className='d-flex justify-content-center' 
              style={{
                  width:'60vw', 
                  marginTop:'2vw',
                  marginLeft:'1rem'
              }}
            >

            </Row>
            <div className='d-box justify-content-center'>

              <ProgressBar now={(step / totalSteps) * 100} label={`${step} de ${totalSteps}`} />
            </div>

            <Form onSubmit={handleSubmit}>
              {step === 1 && <StepOne />}
              {step === 2 && <StepTwo />}
              {step === 3 && <StepThree />}
              {step === 4 && <StepFour />}

              <div className="py-5 d-flex justify-content-between">
                <Button variant="secondary" onClick={handlePreviousStep} disabled={step === 1}>
                  Voltar
                </Button>
                <Button variant="primary" onClick={handleNextStep} disabled={step === totalSteps}>
                  Avançar
                </Button>
              </div>
            </Form>
          </Container>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default NovaARTStep;