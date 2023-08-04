/* eslint-disable no-unused-vars */
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import busca from "../../../images/busca.png"

const StepOne = () => {
    return (
        <Form.Group controlId="step1">
            <Form.Label>Step 1</Form.Label>
            <Row>

                <fieldset className='col-6' style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                    <Form.Label as="legend">Participação Técnica</Form.Label>
                    <div>
                    <Form.Check type="radio" label="Individual" name="radioOptions" />
                    </div>
                    <div>
                    <Form.Check type="radio" label="Coautor" name="radioOptions" />
                    </div>
                    <div>
                    <Form.Check type="radio" label="Coautoria vinculada" name="radioOptions" />
                    </div>
                    <div>
                    <Form.Check type="radio" label="Corresponsabilidade" name="radioOptions" />
                    </div>
                    <div>
                    <Form.Check type="radio" label="Corresponsabilidade Vinculada" name="radioOptions" />
                    </div>
                    <div>
                    <Form.Check type="radio" label="Equioe" name="radioOptions" />
                    </div>
                    <div>
                    <Form.Check type="radio" label="Equipe Vinculada" name="radioOptions" />
                    </div>
                </fieldset>
                <Col className='col-6'>

                    <div className="col-12 mt-3">
                        <Form.Label>Nº da A.R.T vinculada - Participação Técnica</Form.Label>
                        <Form.Control type="text" />
                    </div>

                    <div className="mt-3">
                        <Form.Label>Nº da A.R.T vinculada - Contrato</Form.Label>
                        <Form.Control type="text" />
                    </div>
                </Col>
            </Row>
            <h5 className='mt-4'>Ação Institucional de Calamidade Pública</h5>
            <small>(esta opção não contém nenum acervo associado)</small>
            <div 
            className='d-flex col-3 rounded'
            style={{
                backgroundColor: '#E1E1E1',
                border: '1px solid black',
                margin:'0px',
                padding:'0px',
                marginTop:'2rem'
            }}
            >
            <Row className='d-flex col-12 m-0' style={{padding:'0px'}}>
                <div className='col-6'>
                    <p>
                    Selecionar empresa contratada
                    </p>
                </div>
                <div className='col-6'>
                    <img 
                    src={busca} 
                    style={{
                        position: 'relative',
                        width: '2.5rem',
                        marginTop: '1rem',
                        marginLeft:'3.5rem' // Espaçamento entre o texto e a img
                    }}
                    />
                </div>
            </Row>
            </div>
        </Form.Group>
      );
}
export default StepOne