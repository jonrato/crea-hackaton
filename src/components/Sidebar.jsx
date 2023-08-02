/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';

const Sidebar = ({ handlePageChange }) => {
    const userPhoto = 'https://via.placeholder.com/50';
    // Array de objetos para representar os botões navegáveis
    const navButtons = [
        { text: 'Home', page: 'Home' },
        { text: 'Sobre', page: 'Sobre' },
        { text: 'Contato', page: 'Contato' },
        { text: 'Serviços', page: 'Serviços' },
        { text: 'Configurações', page: 'Configurações' },
    ];
  return (
    <div className="sidebar" >
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ padding: '20px 0' }}>
        {/* Foto de perfil do usuário */}
        <img src={userPhoto} alt="Foto de perfil" style={{ width: '50px', height: '50px', borderRadius: '50%', marginBottom: '20px' }} />
        <h2>Navegação</h2>
      </div>
      {/* Tabela para os botões navegáveis */}
        {navButtons.map((button, index) => (

        <div key={index} className='w-100 col-12 bg bg-dark text-white' onClick={() => handlePageChange(button.page)}>
            {button.text}
        </div>
        ))}
      <table className="table table-borderless">
        <tbody>
        </tbody>
      </table>
    </div>

  );
};

export default Sidebar;
