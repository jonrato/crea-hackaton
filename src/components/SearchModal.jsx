/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Row, Modal, Form, Button, Table } from 'react-bootstrap';

const SearchModal = ({ show, handleClose }) => {
    const [formData, setFormData] = useState({
      numeroRegistro: '',
      cnpj: '',
      razaoSocial: '',
      nomeFantasia: '',
    });
  
    const [searchResult, setSearchResult] = useState(null);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Lógica para buscar com os dados do formulário
      // Implemente aqui a lógica de busca com os dados preenchidos
      // Por exemplo, aqui estou simulando um resultado fictício de busca
      const result = [
        {
          numeroRegistro: '1223443',
          cnpj: '123',
          razaoSocial: 'Lorem ipsum',
          nomeFantasia: 'Lorem ipsum',
        },
        {
          numeroRegistro: '9876543',
          cnpj: '456',
          razaoSocial: 'Dolor sit amet',
          nomeFantasia: 'Consectetur adipiscing elit',
        },
      ];
      setSearchResult(result);
    };
  
    const handleClear = () => {
      setFormData({
        numeroRegistro: '',
        cnpj: '',
        razaoSocial: '',
        nomeFantasia: '',
      });
      setSearchResult(null);
    };
  
    const handleConfirm = () => {
      // Lógica para lidar com a seleção do resultado e confirmação
      // Por exemplo, você pode pegar o item selecionado e fazer alguma ação com ele
      // Aqui estou apenas mostrando um alerta com os dados do item selecionado
      alert(JSON.stringify(searchResult));
    };
  
    return (
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Buscar Empresa Contratada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {searchResult ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Nº de Registro</th>
                  <th>CNPJ</th>
                  <th>Razão Social</th>
                  <th>Nome Fantasia</th>
                  <th>Selecionar</th>
                </tr>
              </thead>
              <tbody>
                {searchResult.map((item, index) => (
                  <tr key={index}>
                    <td>{item.numeroRegistro}</td>
                    <td>{item.cnpj}</td>
                    <td>{item.razaoSocial}</td>
                    <td>{item.nomeFantasia}</td>
                    <td>
                      <Form.Check
                        type="radio"
                        name="selectedResult"
                        value={index}
                        onChange={(e) => console.log('Item selecionado:', searchResult[e.target.value])}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Row>
                <Form.Group className="col-6">
                  <Form.Label>Nº de Registro</Form.Label>
                  <Form.Control
                    type="text"
                    name="numeroRegistro"
                    value={formData.numeroRegistro}
                    onChange={handleChange}
                  />
                </Form.Group>
  
                <Form.Group className="col-6">
                  <Form.Label>CNPJ</Form.Label>
                  <Form.Control
                    type="text"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleChange}
                  />
                </Form.Group>
  
                <Form.Group className="col-6">
                  <Form.Label>Razão Social</Form.Label>
                  <Form.Control
                    type="text"
                    name="razaoSocial"
                    value={formData.razaoSocial}
                    onChange={handleChange}
                  />
                </Form.Group>
  
                <Form.Group className="col-6">
                  <Form.Label>Nome Fantasia</Form.Label>
                  <Form.Control
                    type="text"
                    name="nomeFantasia"
                    value={formData.nomeFantasia}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Row className="justify-content-end mt-3">
                <Button className="mr-2" variant="primary" type="submit">
                  Buscar
                </Button>
                <Button variant="secondary" onClick={handleClear}>
                  Limpar
                </Button>
              </Row>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {searchResult ? (
            <Button variant="primary" onClick={handleConfirm}>
              Confirmar
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default SearchModal;