import { ChangeEvent, useContext } from "react";
import { Container } from "./styles";
import { CompanyContext, ICompanyValue } from "../../Context/CompanyContext";

export function CompanyFilter() {
  const { setSearchValue, columnFilter, setColumnFilter } =
    useContext(CompanyContext);

  const handleFilterSearch = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  const handleFilterColumn = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setColumnFilter(value as keyof ICompanyValue);
  };

  return (
    <Container>
      <div>
        <input
          placeholder="Buscar..."
          autoFocus
          data-testid="columns-search"
          onChange={(e) => handleFilterSearch(e)}
        />
      </div>
      <form>
        <select value={columnFilter} onChange={(e) => handleFilterColumn(e)}>
          <option value="name">Nome</option>
          <option value="phone">Telefone</option>
          <option value="cnpj">CNPJ</option>
          <option value="address">Endereço</option>
        </select>
      </form>
    </Container>
  );
}
