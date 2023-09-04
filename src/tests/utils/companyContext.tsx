import { ContextData, ICompanyValue } from "../../Context/CompanyContext";

const mockCompanyContext: ContextData = {
  columnFilter: "" as keyof ICompanyValue,
  idRegistration: 0,
  searchValue: "",
  setColumnFilter: jest.fn(),
  setIdRegistration: jest.fn(),
  setSearchValue: jest.fn(),
  setCompanyValue: jest.fn(),
  companyValue: [],
};

export default mockCompanyContext;
