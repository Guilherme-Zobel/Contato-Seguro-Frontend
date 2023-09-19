import { useContext } from "react";
import { Container } from "./styles";
import { CompanyContext, ICompanyValue } from "../../Context/CompanyContext";

export function CompanyFilter() {
  const { searchValue, setSearchValue, columnFilter, setColumnFilter } =
    useContext(CompanyContext);

  return (
    <Container>
      <div>
        <input
          placeholder="Buscar..."
          autoFocus
          data-testid="columns-search"
          value={searchValue}
          onChange={({ target: { value } }) => setSearchValue(value)}
        />
      </div>
      <form>
        <select value={columnFilter}
        onChange={(
          { target: { value } }) => setColumnFilter(value  as keyof ICompanyValue )}>
          <option value="name">Nome</option>
          <option value="phone">Telefone</option>
          <option value="cnpj">CNPJ</option>
          <option value="address">Endereço</option>
        </select>
      </form>
    </Container>
  );
}
