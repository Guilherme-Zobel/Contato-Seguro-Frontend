import { ChangeEvent, useContext } from 'react';
import { UserContext, IUserValue } from '../../Context/UserContext';
import { Container } from './styles';

export function UserFilter() {
  
  const { searchValue, setSearchValue, columnFilter, setColumnFilter } = useContext(UserContext);
  
  const handleFilterSearch = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  const handleFilterColumn = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    setColumnFilter(value as keyof IUserValue);
  }; 

  return (
    <Container>
      <div>
        <input
          placeholder="Buscar..."
          autoFocus
          value={searchValue}
          onChange={(e) => handleFilterSearch(e)}
        />
      </div>
      <form>
        <select
          data-testid="columns-search"
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
