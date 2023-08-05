/* eslint-disable no-unused-vars */
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const StepTwo = () => {

  function cep(e){
    const cep = e.target.value.replace(/\D/g,'');
    fetch(`https://viacep.com.br/ws/${cep}/json/`, { method: 'GET' })
    .then(res => res.json()).then(data => {
      console.log(data);

      var uf = document.getElementById('uf');
      uf.value=data.uf;

      var cidade = document.getElementById('cidade');
      cidade.value=data.localidade;

    })
    //alert();
  }

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
      <h5 style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}>
        Tipo de Contratante
      </h5>
      <Row>

        <Form.Group as={Row} className='align-items-center col-6' style={{marginLeft:'0.1rem'}}>
            <Form.Check type="radio" label="Pessoa Física" name="contratanteType" value="Pessoa Física" />
            <Form.Check type="radio" label="Pessoa Física Estrangeira" name="contratanteType" value="Pessoa Física Estrangeira" />
            <Form.Check type="radio" label="Pessoa Jurídica de Direito Privado" name="contratanteType" value="Pessoa Jurídica de Direito Privado" />
            <Form.Check type="radio" label="Pessoa Jurídica de Direito Público" name="contratanteType" value="Pessoa Jurídica de Direito Público" />
            <Form.Check type="radio" label="Pessoa Jurídica Estrangeira" name="contratanteType" value="Pessoa Jurídica Estrangeira" />
        </Form.Group>

        <Row className='col-6'>
            <Col>
            <Form.Group>
                <Form.Label>Contratante</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group>
                <Form.Label>CNPJ</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            </Col>
        </Row>
        <Row className='col-6'>
            <Col>
            <Form.Group>
                <Form.Label>Nº do Contrato</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group>
                <Form.Label>Celebrado em</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            </Col>
        </Row>
        <Row className='col-6'>
            <Col>
            <Form.Group>
                <Form.Label>Valor do Contrato</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group>
                <Form.Label>Custo da Obra</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            </Col>
        </Row>
      </Row>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginTop: '20px' }}>
      <h5 style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}>
        Endereço
      </h5>

      <Row>
        <Col>
          <Form.Group>
            <Form.Label>País</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>CEP</Form.Label>
            <Form.Control onBlur={cep} type="text" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Tipo de Logradouro</Form.Label>
            <Form.Control as="select">
              <option value="">Selecione...</option>
              <option value="Rua">Rua</option>
              <option value="Avenida">Avenida</option>
              <option value="Estrada">Estrada</option>
              {/* Adicione mais opções aqui, se necessário */}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Logradouro</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Número</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Complemento</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Bairro</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Estado/UF</Form.Label>
            <Form.Control id="uf" type="text" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Cidade</Form.Label>
            <Form.Control id="cidade" type="text" />
          </Form.Group>
        </Col>
      </Row>
    </div>

    </div>
  );
};

export default StepTwo;

