/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const AddContractorAddressTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [newAddress, setNewAddress] = useState({
    endereco: '',
    cidade: '',
    pais: '',
  });
  const [addresses, setAddresses] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleAddAddress = () => {
    setAddresses((prevAddresses) => [...prevAddresses, { ...newAddress }]);
    setNewAddress({
      endereco: '',
      cidade: '',
      pais: '',
    });
    setShowModal(false);
  };

  return (
    <>
      <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        Adicionar Endereço do Contratante
      </h3>
      <Table bordered>
        <thead>
          <tr>
            <th>Endereço</th>
            <th>Cidade</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address, index) => (
            <tr key={index}>
              <td>{address.endereco}</td>
              <td>{address.cidade}</td>
              <td>{address.pais}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="primary" onClick={() => setShowModal(true)}>
        Adicionar
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Preencher Endereço</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="endereco">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                name="endereco"
                value={newAddress.endereco}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="cidade">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                name="cidade"
                value={newAddress.cidade}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="pais">
              <Form.Label>País</Form.Label>
              <Form.Control
                type="text"
                name="pais"
                value={newAddress.pais}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleAddAddress}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddContractorAddressTable;
