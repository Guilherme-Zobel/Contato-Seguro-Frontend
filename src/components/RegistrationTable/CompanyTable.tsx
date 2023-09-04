import moment from "moment";
import { useContext } from "react";
import { Container } from "./styles";
import { ICompanyValue, CompanyContext } from "../../Context/CompanyContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { formatPhone } from "../../utils/formatPhone";

interface CompanyTableProps {
  handleOpenModal: () => void;
}

export function CompanyTable({ handleOpenModal }: CompanyTableProps) {
  const {
    searchValue,
    columnFilter,
    companyValue,
    setCompanyValue,
    setIdRegistration,
  } = useContext(CompanyContext);

  function handleDelete(id: number) {
    const updatedRowsData = companyValue.filter((row) => row.id !== id);
    setCompanyValue(updatedRowsData);
  }

  function handleEdit(id: number) {
    setIdRegistration(id);
    handleOpenModal();
  }

  const filterRow = companyValue.filter((row: ICompanyValue) =>
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
                <td>{row.cnpj}</td>
                <td>{row.address}</td>
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
