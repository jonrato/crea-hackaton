/* eslint-disable no-unused-vars */
import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import { SiGoogle } from 'react-icons/si'; // Importe o ícone do Google
import firebase from '../firebase';
import auth from '../firebase'
import googleProvider from "../firebase"


const RightSection = () => {
    const handleGoogleSignIn = () => {
        const provider = new auth.GoogleAuthProvider(); // Use 'auth' corretamente aqui
        auth.signInWithPopup(provider)
          .then((result) => {
            // O usuário fez login com sucesso
            const user = result.user;
            console.log(user); // Exemplo de como exibir os dados do usuário no console
          })
          .catch((error) => {
            // Ocorreu um erro durante o login
            console.error('Erro durante o login:', error);
          });
      };
  return (
    <div className="left-section d-flex flex-column align-items-center justify-content-center">
        <h5>LOGIN</h5>
      <Form className="mt-4 col-md-6">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>CREA</Form.Label>
          <Form.Control type="email" placeholder="Digite o número do seu CREA" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="password" placeholder="Digite seu CPF" />
        </Form.Group>
        <a href="">
        <small>Esqueci a senha</small>
        </a>
        <Row className='d-flex align-items-center justify-content-center col-12'>

            <Button 
            type="submit" 
            className="mt-3 col-4 btn btn-info"
            style={{
                // backgroundColor:"rgba(0,0,128,0.8)",
                // border:'1px solid rgba(0,0,128,0.8)',
                marginRight:'2rem'
            }}
            >
              Voltar
            </Button>
            <Button
            className='mt-3 col-4'
            style={{
                backgroundColor:"rgba(0,0,128,0.8)",
                border:'1px solid rgba(0,0,128,0.8)'
            }}
            href="/dashboard"
            >
              Continuar
            </Button>
        </Row>
      </Form>
      
      
      <div className="line"></div> {/* Linha divisória */}
      <small>
        Termos de uso e aviso de privacidade
      </small>
      {/* <Button onClick={handleGoogleSignIn} className="google-button">
        <SiGoogle className="google-icon" />
        Entrar com o Google
      </Button> */}
    </div>
  );
};

export default RightSection;
