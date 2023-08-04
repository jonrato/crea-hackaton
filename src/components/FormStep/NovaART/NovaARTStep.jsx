/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, ProgressBar, Button, Container, Row, Col } from 'react-bootstrap';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import Sidebar from '../../Sidebar';
import Header from '../../Header';

const NovaARTStep = () => {
    const [step, setStep] = useState(1);
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
    
    <div style={{ position: 'relative' }}>
    <div style={{ height: '13vh' }}>
      <Header />
    </div>
    <Container fluid style={{ height: '93.5vh' }}>
      <Row>

        <div
          className="bg-warning sidebar-shadow"
          style={{
            width: '20vw',
            backgroundColor: 'rgba(0, 0, 128, 0.8)',
            color: 'black',
            height: 'calc(100vh - 60px)',
          }}
        >
          <Sidebar/>
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

              <ProgressBar now={(step / totalSteps) * 100} label={`${step} of ${totalSteps}`} />
            </div>

            <Form onSubmit={handleSubmit}>
              {step === 1 && <StepOne />}
              {step === 2 && <StepTwo />}
              {step === 3 && <StepThree />}
              {step === 4 && <StepFour />}

              <div className="py-5 d-flex justify-content-between">
                <Button variant="secondary" onClick={handlePreviousStep} disabled={step === 1}>
                  Previous
                </Button>
                <Button variant="primary" onClick={handleNextStep} disabled={step === totalSteps}>
                  Next
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