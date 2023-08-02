// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const ContentSection = ({ currentPage }) => {
  return (
    <div className="content-section">
      {currentPage === 'Home' && <div>Conteúdo da página Home</div>}
      {currentPage === 'Sobre' && <div>Conteúdo da página Sobre</div>}
      {currentPage === 'Contato' && <div>Conteúdo da página Contato</div>}
      {currentPage === 'Serviços' && <div>Conteúdo da página Serviços</div>}
      {currentPage === 'Configurações' && <div>Conteúdo da página Configurações</div>}
    </div>
  );
};

export default ContentSection;
