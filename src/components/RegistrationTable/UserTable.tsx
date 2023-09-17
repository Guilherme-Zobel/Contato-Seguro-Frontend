import moment from "moment";
import { useContext } from "react";
import { Container } from "./styles";
import { IUserValue, UserContext } from "../../Context/UserContext";
import { CompanyContext } from "../../Context/CompanyContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { formatPhone } from "../../utils/formatPhone";

export function UserTable() {
  const {
    searchValue,
    columnFilter,
    userValue,
    setUserValue,
    setIdRegistration,
    setIsOpenModal,
  } = useContext(UserContext);
  const { companyValue } = useContext(CompanyContext);

  function handleDelete(id: number) {
    const updatedRowsData = userValue.filter((row) => row.id !== id);
    setUserValue(updatedRowsData);
  }

  function handleEdit(id: number) {
    setIdRegistration(id);
    setIsOpenModal(true);
  }

  const filterRows = userValue.filter((row: IUserValue) => {
   const searchValueLower = searchValue.toLowerCase();

    if (columnFilter === 'companies') {
      const userCompanies = companyValue.filter(({ id }) => row.companies.includes(id));
      return userCompanies.length === 0
        ? true
        : userCompanies.find(({ name }) => name.toLowerCase().includes(searchValueLower))
   }

    return row[columnFilter]
      .toString()
      .toLowerCase()
      .includes(searchValueLower)
  });

  return (
    <Container>
      <table>
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
                <td>{moment(row.birthdate).format("DD/MM/YYYY")}</td>
                <td>{row.city}</td>
                <td>
                  <button>
                    <FaTrash onClick={() => handleDelete(row.id)} />
                    <FaEdit onClick={() => handleEdit(row.id)} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
