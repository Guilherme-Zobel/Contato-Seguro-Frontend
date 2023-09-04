import moment from "moment";
import { useContext } from "react";
import { Container } from "./styles";
import { IUserValue, UserContext } from "../../Context/UserContext";
import { CompanyContext } from "../../Context/CompanyContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { formatPhone } from "../../utils/formatPhone";

interface UserTableProps {
  handleOpenModal: () => void;
}

export function UserTable({ handleOpenModal }: UserTableProps) {
  const {
    searchValue,
    columnFilter,
    userValue,
    setUserValue,
    setIdRegistration,
  } = useContext(UserContext);
  const { companyValue } = useContext(CompanyContext);

  function handleDelete(id: number) {
    const updatedRowsData = userValue.filter((row) => row.id !== id);
    setUserValue(updatedRowsData);
  }

  function handleEdit(id: number) {
    setIdRegistration(id);
    handleOpenModal();
  }

  const filterRow = userValue.filter((row: IUserValue) =>
    row[columnFilter]
      .toString()
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

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
          {filterRow.length > 0 &&
            filterRow.map((row) => (
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
