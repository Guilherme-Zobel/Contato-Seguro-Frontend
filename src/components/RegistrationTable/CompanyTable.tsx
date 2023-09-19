import Modal from "react-modal";
import { useContext, useState } from "react";
import { Container } from "./styles";
import { ICompanyValue, CompanyContext } from "../../Context/CompanyContext";
import { UserContext } from "../../Context/UserContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { formatPhone } from "../../utils/formatPhone";
import { formatCnpj } from "../../utils/formatCnpj";
import { ModalDelete } from "../Modal.tsx/DeleteModal";

export function CompanyTable() {
  const {
    searchValue,
    columnFilter,
    companyValue,
    idRegistration,
    setCompanyValue,
    setIdRegistration,
    setIsOpenModal,
  } = useContext(CompanyContext);
  const { userValue, setUserValue } = useContext(UserContext);

  const [confirmNameDelete, setConfirmNameDelete] = useState('')
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
  const [countCompaniesByUser, setCountCompaniesByUser] = useState(0)
  const [deleteSuccess, setDeleteSuccess] = useState(false)


  function handleDelete(id: number, name:string) {
    setIdRegistration(id);
    setIsOpenModalDelete(true)
    setConfirmNameDelete(name)
    const countCompaniesById = userValue.reduce((totalCount, user) => {
      const count = user.companies.filter(companyId => companyId === id).length;
      return totalCount + count;
    }, 0)
    setCountCompaniesByUser(countCompaniesById)
    
  }
  
  function handleConfirmDelete() {
      const updatedRowsData = companyValue.filter((row) => row.id !== idRegistration);
      const updatedUserData = userValue.map((user) => {
        user.companies = user.companies.filter((companyId) => companyId !== idRegistration);
        return user;
    });
      
      setCompanyValue(updatedRowsData);
      setUserValue(updatedUserData);
      setIsOpenModalDelete(false)
      setDeleteSuccess(true)

    }

    function handleCloseModal() {
      setIsOpenModalDelete(false);
    }
  

  function handleEdit(id: number) {
    setIdRegistration(id);
    setIsOpenModal(true);
  }

  const filterRow = companyValue.filter((row: ICompanyValue) =>
    row[columnFilter]
      .toString()
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  const plural = countCompaniesByUser > 1 ? 's' : ''; // Adicione 's' para pluralizar

  return (
    <Container>
      <table data-testid="company-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>CNPJ</th>
            <th>Endereço</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filterRow.length > 0 &&
            filterRow.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{formatPhone(row.phone)}</td>
                <td>{formatCnpj(row.cnpj)}</td>
                <td>{row.address}</td>
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
        countCompaniesByUser={countCompaniesByUser}
        deleteSuccess={deleteSuccess}
        setDeleteSuccess={setDeleteSuccess}
        handleCloseModal={handleCloseModal}
        handleConfirmDelete={handleConfirmDelete}
      />
    </Container>
  );
}
