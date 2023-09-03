import moment from 'moment';
import { useContext } from "react";
import { Container } from "./styles";
import { Context } from "../../Context/Context";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { formatPhone } from "../../utils/formatPhone";

interface Row {
  name: string;
  email: string;
  phone: string;
  birthdate: string;
  city: string;
}

export function RegistrationTable() {

  const {  dataValue, setDataValue  } = useContext(Context);

  function handleDelete(id: string) {
    const updatedRowsData = dataValue.filter((row) => row.id !== id);
    setDataValue(updatedRowsData);
  };

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
          {dataValue.length > 0 &&
            dataValue.map((row) => (
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

