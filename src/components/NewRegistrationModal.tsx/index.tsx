import Modal from 'react-modal'
import closeImg from '../../assets/close.svg';
import { Cointainer, StyledSideBySideInputs } from './styles';

interface NewRegistrationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewRegistrationModal({ isOpen, onRequestClose}: NewRegistrationModalProps) {
  return (
    <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"                
        >
          <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
          >
            <img src={closeImg} alt="Fechar modal" />
          </button>
          <Cointainer>
            <h2>Inserir</h2>

            <input
              placeholder='Nome'
            />
            <input
              type="email"
              placeholder='E-mail'
            />
             <StyledSideBySideInputs>
            <input
              type="number"
              placeholder='Telefone'
            />

            <input
              type="date"
              placeholder='Data de Nascimento'
            />
             </StyledSideBySideInputs>

             <input
              placeholder='Cidade onde nasceu'
            />
            
            <StyledSideBySideInputs>
              <button
                type="button"
              >
                <span>Limpar</span>
              </button>

              <button
                type="submit"
              >
                <span>Enviar</span>
              </button>
            </StyledSideBySideInputs>
          </Cointainer>
        </Modal>
  );
}