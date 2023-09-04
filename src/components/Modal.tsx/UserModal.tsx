import Modal from "react-modal";
import InputMask from "react-input-mask";
import closeImg from "../../assets/close.svg";
import Select from "react-select";
import { Cointainer, StyledSideBySideInputs } from "./styles";
import { useContext, useEffect, useState } from "react";
import { IUserValue, UserContext } from "../../Context/UserContext";
import { CompanyContext } from "../../Context/CompanyContext";
import { idGenerator } from "../../utils/idGenerator";

interface UserModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
}

export function UserModal({ isOpenModal, closeModal }: UserModalProps) {
  const initialValue: IUserValue = {
    id: 0,
    name: "",
    companies: [],
    email: "",
    phone: "",
    birthdate: "",
    city: "",
    icons: "null",
  };

  const { idRegistration, userValue, setUserValue } = useContext(UserContext);
  const { companyValue } = useContext(CompanyContext);
  const [formData, setFormData] = useState(initialValue);
  const [companyOptions, setCompanyOptions] = useState<
    { value: number; label: string }[]
  >([]);

  useEffect(() => {
    if (isOpenModal) {
      const editValue = userValue?.find((row) => row.id === idRegistration);
      setFormData(editValue || initialValue);
      setCompanyOptions([]);
      companyValue.map((company) =>
        setCompanyOptions((value) => [
          ...value,
          { value: company.id, label: company.name },
        ])
      );
    }
  }, [isOpenModal]);

  function handleClear() {
    setFormData(initialValue);
  }

  function updateOrInsertRegistration() {
    if (idRegistration) {
      const index = userValue.findIndex((row) => row.id === idRegistration);

      if (index !== -1) {
        setUserValue((value) => {
          value[index] = formData;
          return value;
        });
      }
    } else {
      const formDataWithId = { ...formData, id: idGenerator(userValue) };
      setUserValue((prevState) => [...prevState, formDataWithId]);
    }
  }

  function handleFormSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (formData.name.trim() === "" || formData.email.trim() === "") {
      return window.alert("Nome e E-mail são obrigatórios");
    }

    updateOrInsertRegistration();
    closeModal();
    handleClear();
  }

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={closeModal} className="react-modal-close">
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
        <input
          type="email"
          placeholder="E-mail*"
          value={formData?.email}
          onChange={({ target: { value } }) =>
            setFormData((prevState) => ({ ...prevState, email: value }))
          }
          required
        />
        <div data-testid="select-companies">
          <Select
            isMulti
            options={companyOptions}
            value={formData.companies.map((companyId) => ({
              value: companyId,
              label: companyValue.find(({ id }) => id === companyId)?.name || '',
            }))}
            data-testid="select-companies"
            placeholder="Selecione suas empresas..."
            onChange={(newValue) => {
              setFormData((prevState) => ({
                ...prevState,
                companies: newValue.map((v) => v.value),
              }));
            }}
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: "#e7e9ee",
                border: "1px solid #d7d7d7",
                marginTop: "1rem",
                fontSize: "18px",
                "&:hover": {
                  border: "1px solid #d7d7d7",
                },
              }),
            }}
          />
        </div>
        <StyledSideBySideInputs>
          <InputMask
            mask="(99) 99999-9999"
            placeholder="(00) 00000-0000"
            value={formData?.phone}
            onChange={({ target: { value } }) =>
              setFormData((prevState) => ({ ...prevState, phone: value }))
            }
          />

          <input
            type="date"
            placeholder="Data de Nascimento"
            value={formData.birthdate}
            onChange={({ target: { value } }) =>
              setFormData((prevState) => ({ ...prevState, birthdate: value }))
            }
          />
        </StyledSideBySideInputs>

        <input
          placeholder="Cidade onde nasceu"
          value={formData.city}
          onChange={({ target: { value } }) =>
            setFormData((prevState) => ({ ...prevState, city: value }))
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
