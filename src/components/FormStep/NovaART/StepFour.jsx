/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Table } from 'react-bootstrap';

const FourStep = () => {
    const [activities, setActivities] = useState([]);
    const initialActivityState = {
        areaAtuacao: '',
        subAreaAtuacao: '',
        nivelAtuacao: '',
        atividade: '',
        obra: '',
        complemento: '',
        unidade: '',
        quantificacao: '',
    };
    const [newActivity, setNewActivity] = useState(initialActivityState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewActivity((prevActivity) => ({ ...prevActivity, [name]: value }));
    };

    const handleAddActivity = () => {
        setActivities((prevActivities) => [...prevActivities, { ...newActivity }]);
        setNewActivity(initialActivityState);
    };

    useEffect(() => {
        // Aqui podemos realizar alguma ação quando a lista de atividades for atualizada.
        // Por exemplo, podemos imprimir no console para verificar se está funcionando corretamente.
        console.log(activities);
    }, [activities]);

  return (
    <Form.Group controlId="fourStep">
      <Form.Label>Step 4</Form.Label>
      <fieldset style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
        <legend>Adicionar atividades profissionais</legend>
        <Row>
            <Col md={6}>
                <Form.Label>Área de Atuação</Form.Label>
                <Form.Control
                    as="select"
                    name="areaAtuacao" 
                    value={newActivity.areaAtuacao} 
                    onChange={handleInputChange} 
                >
                    <option>Atividades na Área da Engenharia Nuclear</option>
                    {/* Outras opções aqui */}
                </Form.Control>
            </Col>
            <Col md={6}>
                <Form.Label>Sub Área de Atuação</Form.Label>
                <Form.Control
                    as="select"
                    name="subAreaAtuacao" 
                    value={newActivity.subAreaAtuacao}
                    onChange={handleInputChange}
                >
                    <option>Construções para Fins Agropecuários, Agroindustriais, Aquícolas e Florestais</option>
                    {/* Outras opções aqui */}
                </Form.Control>
            </Col>
            </Row>
            <Row>
            <Col md={6}>
                <Form.Label>Nível de Atuação</Form.Label>
                <Form.Control 
                    as="select"
                    name="nivelAtuacao"
                    value={newActivity.nivelAtuacao}
                    onChange={handleInputChange}
                >
                <option>Atividades na Área da Engenharia Nuclear</option>
                {/* Outras opções aqui */}
                </Form.Control>
            </Col>
            <Col md={6}>
                <Form.Label>Atividade</Form.Label>
                <Form.Control 
                    as="select"
                    name="atividade"
                    value={newActivity.atividade}
                    onChange={handleInputChange}
                >
                <option>Construções para Fins Agropecuários, Agroindustriais, Aquícolas e Florestais</option>
                {/* Outras opções aqui */}
                </Form.Control>
            </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Label>Obra/Serviço</Form.Label>
            <Form.Control 
                as="select" 
                name="obra"
                value={newActivity.obra}
                onChange={handleInputChange}
            >
                <option>Lorem Ipsum</option>
            </Form.Control>
          </Col>
          <Col md={6}>
            <Form.Label>Complemento</Form.Label>
            <Form.Control 
                as="select"
                name="complemento"
                value={newActivity.complemento}
                onChange={handleInputChange}
            >
                <option>Lorem Ipsum</option>
            </Form.Control>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col md={6}>
            <Form.Label>Unidade</Form.Label>
            <Form.Control 
                as="select"
                name="unidade"
                value={newActivity.unidade}
                onChange={handleInputChange}
            >
                <option>Lorem Ipsum</option>
            </Form.Control>
          </Col>
          <Col md={6}>
            <Form.Label>Quantificação</Form.Label>
            <Form.Control 
                as="select"
                name="quantificacao"
                value={newActivity.quantificacao}
                onChange={handleInputChange}
            >
                <option>Lorem Ipsum</option>
            </Form.Control>
          </Col>
        </Row>
        <Col md={6}>
            <Button onClick={handleAddActivity}> {/* Adicione o evento onClick aqui */}
                Incluir Atividade Profissional
            </Button>
        </Col>
      </fieldset>

      {activities.length > 0 && (
        <Table striped bordered hover style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Ações</th>
              <th>Área de Atuação</th>
              <th>Sub Área de Atuação</th>
              <th>Nível de Atuação</th>
              <th>Atividade</th>
              <th>Obra/Serviço</th>
              <th>Complemento</th>
              <th>Unidade</th>
              <th>Quantificação</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                <td>
                  {/* Botões Editar e Deletar */}
                  <Button variant="info" size="sm">
                    Editar
                  </Button>
                  <Button variant="danger" size="sm">
                    Deletar
                  </Button>
                </td>
                <td>{activity.areaAtuacao}</td>
                <td>{activity.subAreaAtuacao}</td>
                <td>{activity.nivelAtuacao}</td>
                <td>{activity.atividade}</td>
                <td>{activity.obra}</td>
                <td>{activity.complemento}</td>
                <td>{activity.unidade}</td>
                <td>{activity.quantificacao}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Form.Group>
  );
};

export default FourStep;

