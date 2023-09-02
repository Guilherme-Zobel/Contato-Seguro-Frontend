import { ChangeEvent, useContext } from 'react';
import { Container } from './styles';
import { Context } from '../../Context/Context';

export function SearchFilter() {
  
  const { setSearchValue, columnFilter, setColumnFilter } = useContext(Context);
  
  const handleFilterSearch = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  const handleFilterColumn = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    setColumnFilter(value);
  };

  return (
    <Container>
      <div>
        <input
          placeholder="Buscar..."
          onChange={(e) => handleFilterSearch(e)}
        />
      </div>
      <form>
        <select
          value={ columnFilter }
          onChange={ (e) => handleFilterColumn(e) }
        >
          <option value="name">Nome</option>
          <option value="email">Email</option>
          <option value="phone">Telefone</option>
          <option value="birthdate">Nascimento</option>
          <option value="city">Cidade</option>
        </select>
      </form>
    </Container>
  );
};
