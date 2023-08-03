/* eslint-disable react/prop-types */
import profile from "../images/profile.png";
import iconanuidade from "../images/ic-anuidade.png";
import iconarts from "../images/ic-arts.png";
import iconservicos from "../images/ic-servicos.png";
import iconatendimentos from "../images/ic-atendimentos.png";
import iconmanutencao from "../images/ic-manutencao.png";


const Sidebar = ({ handlePageChange }) => {
    // Array de objetos para representar os botões navegáveis
    const navButtons = [
        {icon: iconanuidade, text: 'Home', page: 'Home' },
        {icon: iconanuidade, text: 'Anuidade', page: 'Anuidade' },
        {icon: iconarts, text: 'A.R.T.s', page: 'ARTs' },
        {icon: iconservicos, text: 'Serviços', page: 'Serviços' },
        {icon: iconatendimentos, text: 'Atendimento Online', page: 'Atendimento Online' },
        {icon: iconmanutencao, text: 'Manutenção do Registro CREASP', page: 'Atendimento Online' },
    ];
  return (
    <div className="sidebar bg-warning sidebar-shadow">
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ padding: '20px 0' }}>
        {/* Foto de perfil do usuário */}
        <img src={profile} alt="Foto de perfil" style={{ width: '8rem', borderRadius: '50%', marginBottom: '1.5rem' }} />
        <h7>Paulo Lopes de Oliveira</h7>
        <h7>CREA 50221334501</h7>
      </div>
      {/* Tabela para os botões navegáveis */}
        {navButtons.map((button, index) => (
        <div 
          key={index} 
          className='d-flex m-2 text-center bg bg-warning text-black align-items-center justify-content-center'
          onClick={() => handlePageChange(button.page)}
        >
            <img 
            src={button.icon}
            style={{width:'2.5rem', marginTop:'0.8rem'}}
            />
            <small
              className="col-9 font-weight-bold"
              style={{marginTop:'0.8rem'}}
            >
            {button.text}
            </small>
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
