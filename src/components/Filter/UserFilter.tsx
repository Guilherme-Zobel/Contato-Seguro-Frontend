import { useContext } from 'react';
import { UserContext, IUserValue } from '../../Context/UserContext';
import { Container } from './styles';

export function UserFilter() {
  
  const { searchValue, setSearchValue, columnFilter, setColumnFilter } = useContext(UserContext);

  return (
    <Container>
      <div>
        <input
          placeholder="Buscar..."
          autoFocus
          value={searchValue}
          onChange={({ target: { value } }) => setSearchValue(value)}
        />
      </div>
      <form>
        <select
          data-testid="columns-search"
          value={ columnFilter }
          onChange={(
            { target: { value } }) =>  setColumnFilter(value as keyof IUserValue)}
        >
          <option value="name">Nome</option>
          <option value="companies">Empresa</option>
          <option value="email">Email</option>
          <option value="phone">Telefone</option>
          <option value="birthdate">Nascimento</option>
          <option value="city">Cidade</option>
        </select>
      </form>
    </Container>
  );
};
