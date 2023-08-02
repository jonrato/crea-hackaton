/* eslint-disable no-unused-vars */
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { SiGoogle } from 'react-icons/si'; // Importe o ícone do Google
import firebase from '../firebase';
import auth from '../firebase'
import googleProvider from "../firebase"

const LeftSection = () => {
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
      <Form className="col-md-6">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" />
        </Form.Group>

        <Button 
        type="submit" 
        className="mt-3 w-100"
        style={{
            backgroundColor:"rgba(0,0,128,0.8)",
            border:'1px solid rgba(0,0,128,0.8)'
        }}
        >
          Entrar
        </Button>
      </Form>
      <a href="">
        <small>Esqueceu sua senha?</small>
      </a>
      <Button
        className='w-50 mt-3'
        style={{
            backgroundColor:"rgba(0,0,128,0.8)",
            border:'1px solid rgba(0,0,128,0.8)'
        }}
        href="/register"
      >
        Cadastrar-se
    </Button>
      <div className="line"></div> {/* Linha divisória */}
      <Button onClick={handleGoogleSignIn} className="google-button">
        <SiGoogle className="google-icon" />
        Entrar com o Google
      </Button>
    </div>
  );
};

export default LeftSection;
