import { ContextData, IUserValue } from "../../Context/UserContext";

const mockUserContext: ContextData = {
  columnFilter: "" as keyof IUserValue,
  idRegistration: 0,
  searchValue: "",
  setColumnFilter: jest.fn(),
  setIdRegistration: jest.fn(),
  setSearchValue: jest.fn(),
  setUserValue: jest.fn(),
  userValue: [],
  isOpenModal: false,
  setIsOpenModal: jest.fn(),
};

export default mockUserContext;
