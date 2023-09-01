import Modal from 'react-modal'

interface NewRegistrationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewRegistrationModal({ isOpen, onRequestClose}: NewRegistrationModalProps) {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}                  
      >
        <h2>Inserir</h2>
    </Modal>
  );
}