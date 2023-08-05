/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const WorksServicesTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newAddress, setNewAddress] = useState({
    endereco: '',
    cidade: '',
    pais: '',
  });
  const [addresses, setAddresses] = useState([
    {
      endereco: 'Endereço 1',
      cidade: 'Cidade 1',
      pais: 'País 1',
    },
    {
      endereco: 'Endereço 2',
      cidade: 'Cidade 2',
      pais: 'País 2',
    },
  ]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleAddAddress = () => {
    if (editMode) {
      // Update existing address
      setAddresses((prevAddresses) => {
        const updatedAddresses = [...prevAddresses];
        updatedAddresses[editIndex] = newAddress;
        return updatedAddresses;
      });
    } else {
      // Add new address
      setAddresses((prevAddresses) => [...prevAddresses, { ...newAddress }]);
    }

    setNewAddress({
      endereco: '',
      cidade: '',
      pais: '',
    });
    setShowModal(false);
    setEditMode(false);
    setEditIndex(null);
  };

  const handleEditAddress = (index) => {
    const addressToEdit = addresses[index];
    setNewAddress(addressToEdit);
    setShowModal(true);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDeleteAddress = (index) => {
    setAddresses((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses.splice(index, 1);
      return updatedAddresses;
    });
  };

  return (
    <>
      <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        Lista das obras/serviços cadastradas
      </h3>
      <Table bordered>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Endereço</th>
            <th>Cidade</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address, index) => (
            <tr key={index}>
              <td>
                <Button variant="info" size="sm" onClick={() => handleEditAddress(index)}>
                  Editar
                </Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDeleteAddress(index)}>
                  Deletar
                </Button>
              </td>
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
            {editMode ? 'Salvar Alterações' : 'Salvar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WorksServicesTable;
