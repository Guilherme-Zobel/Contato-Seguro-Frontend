import Modal from "react-modal";
import { StyledBtnCofirmDelete, StyledModalDelete, StyledOkButton } from "./styles";

interface PropsModalDelete {
  isOpenModalDelete: boolean,
  confirmNameDelete: string,
  countCompaniesByUser?: any,
  deleteSuccess: boolean,
  setDeleteSuccess: React.Dispatch<React.SetStateAction<boolean>>,
  handleCloseModal: () => void,
  handleConfirmDelete:  () => void
}

export function ModalDelete(
  {
  countCompaniesByUser,
  isOpenModalDelete,
  confirmNameDelete,
  deleteSuccess,
  setDeleteSuccess,
  handleCloseModal,
  handleConfirmDelete,
  }: PropsModalDelete) {

  const plural = countCompaniesByUser > 1 ? 's' : '';

  return (
    <>
    <Modal
    isOpen={isOpenModalDelete}
    onRequestClose={handleCloseModal}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
        <StyledModalDelete>
        <h2>
          Deseja excluir {confirmNameDelete}?
        </h2>
       {countCompaniesByUser >= 0 ?
       <h3>
          <span>
            {countCompaniesByUser === 0 ? 'Nenhum' : countCompaniesByUser}
          </span>
          { ` usuário${plural} vinculado${plural}`}
        </h3> : ''}
        <StyledBtnCofirmDelete>
          <button onClick={() => handleConfirmDelete()}>
            <span>Confirmar</span>
          </button>
          <button onClick={() => handleCloseModal()}>
            <span>Cancelar</span>
          </button>
        </StyledBtnCofirmDelete>
      </StyledModalDelete>
      </Modal>
      {deleteSuccess && <Modal
        isOpen={deleteSuccess}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <StyledOkButton >
          <h2>{`${confirmNameDelete}`}<br/></h2>
          <h3>foi excluído com sucesso!</h3>
          <button onClick={() => setDeleteSuccess(false)}>
          <span>Ok!</span>
          </button>
        </StyledOkButton >
      </Modal>}
    </>
  )
}