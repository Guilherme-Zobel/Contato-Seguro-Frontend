import moment from "moment";
import { useContext, useState } from "react";
import { Container } from "./styles";
import { IUserValue, UserContext } from "../../Context/UserContext";
import { CompanyContext } from "../../Context/CompanyContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { formatPhone } from "../../utils/formatPhone";
import { ModalDelete } from "../Modal.tsx/DeleteModal";

export function UserTable() {
  const {
    searchValue,
    columnFilter,
    userValue,
    idRegistration,
    setUserValue,
    setIdRegistration,
    setIsOpenModal,
  } = useContext(UserContext);
  const { companyValue } = useContext(CompanyContext);

  const [confirmNameDelete, seConfirmNameDelete] = useState('')
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
  const [deleteSuccess, setDeleteSuccess] = useState(false)

  function handleDelete(id: number, name:string) {
    setIdRegistration(id);
    setIsOpenModalDelete(true)
    seConfirmNameDelete(name);
  }

  function handleConfirmDelete() {
    const updatedRowsData = userValue.filter((row) => row.id !== idRegistration);
    setUserValue(updatedRowsData);
    setIsOpenModalDelete(false);
    setDeleteSuccess(true)
  }

  function handleEdit(id: number) {
    setIdRegistration(id);
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModalDelete(false);
  }

  const filterRows = userValue.filter((row: IUserValue) => {
   const searchValueLower = searchValue.toLowerCase();

    if (columnFilter === 'companies') {
      const userCompanies = companyValue.filter(({ id }) => row.companies.includes(id));
      return userCompanies.length === 0
        ? true
        : userCompanies.find(({ name }) => name.toLowerCase().includes(searchValueLower.toLowerCase()))
   }

    return row[columnFilter]
      .toString()
      .toLowerCase()
      .includes(searchValueLower)
  });

  return (
    <Container>
      <table data-testid="user-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Empresa</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Nascimento</th>
            <th>Cidade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filterRows.length > 0 &&
            filterRows.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td style={{ whiteSpace: "pre-line" }}>
                  {row.companies.map((company) => (
                    companyValue.find(({ id }) => id === company)?.name || ''
                  )).join(", ")}
                </td>
                <td>{row.email}</td>
                <td>{formatPhone(row.phone)}</td>
                <td>{row.birthdate ? moment(row.birthdate).format("DD/MM/YYYY") : ''}</td>
                <td>{row.city}</td>
                <td>
                  <button>
                    <FaTrash onClick={() => handleDelete(row.id, row.name)} />
                    <FaEdit onClick={() => handleEdit(row.id)} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>


      
      <ModalDelete
        isOpenModalDelete={isOpenModalDelete}
        confirmNameDelete={confirmNameDelete}
        deleteSuccess={deleteSuccess}
        setDeleteSuccess={setDeleteSuccess}
        handleCloseModal={handleCloseModal}
        handleConfirmDelete={handleConfirmDelete}
      />
    </Container>
  );
}
