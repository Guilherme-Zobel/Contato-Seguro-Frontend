import Modal from "react-modal";
import InputMask from "react-input-mask";
import closeImg from "../../assets/close.svg";
import { Cointainer, StyledSideBySideInputs } from "./styles";
import { useContext, useEffect, useState } from "react";
import { ICompanyValue, CompanyContext } from "../../Context/CompanyContext";
import { idGenerator } from "../../utils/idGenerator";

export function CompanyModal() {
  const initialValue: ICompanyValue = {
    id: 0,
    name: "",
    phone: "",
    cnpj: "",
    address: "",
  };

  const { idRegistration, companyValue, setCompanyValue, isOpenModal, setIsOpenModal } =
    useContext(CompanyContext);
  const [formData, setFormData] = useState(initialValue);

  useEffect(() => {
    if (isOpenModal) {
      const editValue = companyValue?.find((row) => row.id === idRegistration);
      setFormData(editValue || initialValue);
    }
  }, [isOpenModal]);

  function handleClear() {
    const { id: idRegistration, ...rest } = initialValue;
    const clearValue = { id: idRegistration, ...rest };
    setFormData(clearValue);
  }

  function handleCloseModal() {
    setIsOpenModal(false)
  }

  function updateOrInsertRegistration() {
    if (idRegistration) {
      const index = companyValue.findIndex((row) => row.id === idRegistration);

      if (index !== -1) {
        const newCompanyValue = [...companyValue];
        newCompanyValue[index] = formData;
        setCompanyValue(newCompanyValue);
      }
    } else {
      const formDataWithId = { ...formData, id: idGenerator(companyValue) };
      setCompanyValue([...companyValue, formDataWithId]);
    }
  }

  function handleFormSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (formData.name.trim() === ""
    || formData.cnpj.trim() === ""
    || formData.address.trim() === "") {
      return window.alert("Nome, CNPJ, Endereço são obrigatórios");
    }

    updateOrInsertRegistration();
    setIsOpenModal(false);
    handleClear();
  }

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={() => setIsOpenModal(false)} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Cointainer>
        <h2>{idRegistration != 0 ? "Alterar" : "Inserir"}</h2>

        <input
          placeholder="Nome*"
          value={formData.name}
          onChange={({ target: { value } }) =>
            setFormData((prevState) => ({ ...prevState, name: value }))
          }
          autoFocus
          required
        />
        <StyledSideBySideInputs>
          <InputMask
            mask="(99) 99999-9999"
            placeholder="Telefone"
            value={formData?.phone}
            onChange={({ target: { value } }) =>
              setFormData((prevState) => ({ ...prevState, phone: value }))
            }
          />

          <InputMask
            mask="99.999.999/9999-99"
            placeholder="CNPJ*"
            value={formData.cnpj}
            onChange={({ target: { value } }) =>
              setFormData((prevState) => ({ ...prevState, cnpj: value }))
            }
          />
        </StyledSideBySideInputs>

        <input
          placeholder="Endereço*"
          value={formData.address}
          onChange={({ target: { value } }) =>
            setFormData((prevState) => ({ ...prevState, address: value }))
          }
        />

        <StyledSideBySideInputs>
          <button type="button" onClick={() => handleClear()}>
            <span>Limpar</span>
          </button>

          <button type="submit" onClick={(e) => handleFormSubmit(e)}>
            <span>Enviar</span>
          </button>
        </StyledSideBySideInputs>
      </Cointainer>
    </Modal>
  );
}
