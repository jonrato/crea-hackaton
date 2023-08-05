/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Row, Modal, Form, Button, Table } from 'react-bootstrap';
import { API_KEY } from "../IA";

const HelpModal = ({ show, handleClose }) => {
    const [formData, setFormData] = useState({
      input: '',
    });
  
    const [searchResult, setSearchResult] = useState(null);
    
    function response(){

    }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.value);
      alert(formData.input);

       fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
        "Authorization": `Bearer ${API_KEY}`, 
        "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: formData.input}],
            max_tokens: 24,
        })
    })
    //.then(response => setResposta(response))
    .then(response => response.json())
    //.then(response => console.log(response))
    //.then(data => setResposta(data.toString())) << remover codigo
    .then(data => alert(JSON.stringify(data)))
    //.then(data => console.log(JSON.parse(data).choices))

    .catch(error => {
        console.error(error);
        alert(error)
    });
      var resposta = document.getElementById('resposta');
      resposta.value= formData.input;

      // Lógica para buscar com os dados do formulário
      // Implemente aqui a lógica de busca com os dados preenchidos
      // Por exemplo, aqui estou simulando um resultado fictício de busca
      /*const result = [
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
      setSearchResult(result);*/
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
          <Modal.Title>Chat de Inteligência </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {searchResult ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Faça sua Pergunta</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </Table>
          ) : (
            <Form onSubmit={handleSubmit}>
            <Row>
                <Form.Group className="col-6">
                <Form.Label> Respostas:  </Form.Label>
            <div>
              <textarea id="resposta" name="resposta" style={{width: '90%'}}/> 
            </div> 
            </Form.Group> 
            </Row>    
            <Row>
                <Form.Group className="col-6">
                <Form.Label> Tire suas Dúvidas </Form.Label>
                <Form.Control
                    type="text"
                    name="input"
                    value={formData.numeroRegistro}
                    onChange={handleChange}
                />
                </Form.Group>

              
            </Row>

            <Row className="justify-content-center mt-3">
                <div className="text-center">
                <Button className="mr-2" variant="primary" type="submit" style={{ width: '100px', margin:'1rem' }}>
                    Perguntar
                </Button>

                </div>
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
  
  export default HelpModal;