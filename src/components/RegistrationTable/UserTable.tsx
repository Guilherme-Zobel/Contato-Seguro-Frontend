import moment from 'moment';
import { useContext } from "react";
import { Container } from "./styles";
import { UserContext } from "../../Context/UserContext";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { formatPhone } from "../../utils/formatPhone";

interface Row {
  name: string;
  email: string;
  phone: string;
  birthdate: string;
  city: string;
}

export function UserTable() {

  const {  userValue, setUserValue, searchValue, columnFilter } = useContext(UserContext);

  function handleDelete(id: number) {
    const updatedRowsData = userValue.filter((row) => row.id !== id);
    setUserValue(updatedRowsData);
  };

  const filterRow = userValue.filter((row: Row) =>
  row[columnFilter as keyof Row ].toString().toLowerCase().includes(searchValue.toLowerCase())
);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
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
                <td>{row.email}</td>
                <td>{formatPhone(row.phone)}</td>
                <td>{moment(row.birthdate).format('DD/MM/YYYY')}</td>
                <td>{row.city}</td>
                <td>
                  <button>
                    <FaTrash onClick={() => handleDelete(row.id)}/>
                    <FaEdit/>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}

