/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { Form, Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import busca from "../../../images/busca.png"
import helpGreen from "../../../images/ic-help-green.png"
import RadioButtonWithTooltip from '../../RadioButtonWithTooltip';
import SearchModal from '../../SearchModal';

const StepOne = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipText, setTooltipText] = useState('');

    const [selectedOption, setSelectedOption] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleRadioChange = (e, tooltipText) => {
        setSelectedOption(e.target.value);
    };

    // const handleRadioChange = (event, text) => {
    //     setShowTooltip(true);
    //     setTooltipText(text);
    //   };
    
      const closeTooltip = () => {
        setShowTooltip(false);
        setTooltipText('');
      };
    
      const renderTooltip = (props) => (
        <Tooltip {...props} style={{marginLeft:'-30%'}}>
          {tooltipText}
          <button onClick={closeTooltip} style={{ marginLeft: '10px' }}>Fechar</button>
        </Tooltip>
      );
    return (
        <Form.Group controlId="step1">
            <Form.Label>Step 1</Form.Label>
            <Row>

                <fieldset className='col-6' style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                    <Form.Label as="legend">Participação Técnica</Form.Label>
                    <RadioButtonWithTooltip
                        label="Individual"
                        tooltipText="Este é o tooltip do Individual"
                        checked={selectedOption === 'Individual'}
                        onChange={(e) => handleRadioChange(e, 'Este é o tooltip do Individual')}
                    />
                    <RadioButtonWithTooltip
                        label="Coautoria vinculada"
                        tooltipText="Este é o tooltip do Coautor"
                        checked={selectedOption === 'Coautor'}
                        onChange={(e) => handleRadioChange(e, 'Este é o tooltip Coautoria vinculada')}
                    />
                    <RadioButtonWithTooltip
                        label="Corresponsabilidade"
                        tooltipText="Este é o tooltip Corresponsabilidade"
                        checked={selectedOption === 'Coautor'}
                        onChange={(e) => handleRadioChange(e, 'Este é o tooltip Corresponsabilidade')}
                    />
                    <RadioButtonWithTooltip
                        label="Corresponsabilidade vinculada"
                        tooltipText="Este é o tooltip Corresponsabilidade vinculada"
                        checked={selectedOption === 'Coautor'}
                        onChange={(e) => handleRadioChange(e, 'Este é o tooltip Corresponsabilidade vinculada')}
                    />
                    <RadioButtonWithTooltip
                        label="Equipe"
                        tooltipText="Este é o tooltip Equipe"
                        checked={selectedOption === 'Coautor'}
                        onChange={(e) => handleRadioChange(e, 'Este é o tooltip Equipe')}
                    />
                    <RadioButtonWithTooltip
                        label="Equipe Vinculada"
                        tooltipText="Este é o Equipe Vinculada"
                        checked={selectedOption === 'Coautor'}
                        onChange={(e) => handleRadioChange(e, 'Este é o tooltip Equipe Vinculada')}
                    />
                    
                    
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
            <Row 
                className='d-flex col-12 m-0 justify-content-start align-items-center' 
                style={{ padding: '0px' }}
                onClick={handleShowModal}
            >
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
                    // marginLeft: '3.5rem', (não é mais necessário)
                    }}
                />
                </div>
            </Row>
            {/* Modal de Busca */}
            <SearchModal show={showModal} handleClose={handleCloseModal} />
            </div>
        </Form.Group>
      );
}
export default StepOne