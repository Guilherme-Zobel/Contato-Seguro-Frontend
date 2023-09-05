import App from "../../App";
import mockCompanyContext from "../utils/companyContext";
import { render, screen, fireEvent } from "@testing-library/react";
import { CompanyContext, ICompanyValue } from "../../Context/CompanyContext";
import { CompanyModal } from "../../components/Modal.tsx/CompanyModal";

test("Should open an insert modal", () => {
  render(
    <CompanyContext.Provider value={mockCompanyContext}>
      <CompanyModal isOpenModal={true} closeModal={jest.fn()} />
    </CompanyContext.Provider>
  );

  expect(screen.getByText("Inserir"));
});

test("Should close the insert modal", () => {
  const mockCloseModal = jest.fn();
  render(
    <CompanyContext.Provider value={mockCompanyContext}>
      <CompanyModal isOpenModal={true} closeModal={mockCloseModal} />
    </CompanyContext.Provider>
  );

  const closeButton = screen.getByAltText("Fechar modal");

  fireEvent.click(closeButton);
  expect(mockCloseModal).toBeCalled();
});

test("should insert an company data", () => {
  const mockCloseModal = jest.fn();
  render(
    <CompanyContext.Provider value={mockCompanyContext}>
      <CompanyModal isOpenModal={true} closeModal={mockCloseModal} />
    </CompanyContext.Provider>
  );

  const companyData = {
    address: "Rua teste",
    cnpj: "83.820.285/0001-34",
    id: 1,
    name: "Empresa Teste",
    phone: "(41) 99999-9999",
  } as ICompanyValue;

  const nameInput = screen.getByPlaceholderText("Nome*");
  fireEvent.change(nameInput, { target: { value: companyData.name } });

  const phoneInput = screen.getByPlaceholderText("Telefone");
  fireEvent.change(phoneInput, { target: { value: companyData.phone } });

  const cnpjInput = screen.getByPlaceholderText("CNPJ*");
  fireEvent.change(cnpjInput, { target: { value: companyData.cnpj } });

  const addressInput = screen.getByPlaceholderText("Endereço*");
  fireEvent.change(addressInput, { target: { value: companyData.address } });

  const sendButton = screen.getByText("Enviar");
  fireEvent.click(sendButton);

  expect(mockCompanyContext.setCompanyValue).toBeCalledWith([companyData]);
});

test("should update an company data", () => {
  const mockCloseModal = jest.fn();

  const oldCompanyData = {
    address: "Rua teste",
    cnpj: "83.820.285/0001-34",
    id: 1,
    name: "Empresa Teste",
    phone: "(41) 99999-9999",
  } as ICompanyValue;

  mockCompanyContext.idRegistration = 1;
  mockCompanyContext.companyValue = [oldCompanyData];
  render(
    <CompanyContext.Provider value={mockCompanyContext}>
      <CompanyModal isOpenModal={true} closeModal={mockCloseModal} />
    </CompanyContext.Provider>
  );

  const companyData = {
    address: "Rua novo teste",
    cnpj: "83.820.285/0005-34",
    id: 1,
    name: "Empresa Novo teste",
    phone: "(41) 99999-9997",
  } as ICompanyValue;

  const nameInput = screen.getByPlaceholderText("Nome*");
  fireEvent.change(nameInput, { target: { value: companyData.name } });

  const phoneInput = screen.getByPlaceholderText("Telefone");
  fireEvent.change(phoneInput, { target: { value: companyData.phone } });

  const cnpjInput = screen.getByPlaceholderText("CNPJ*");
  fireEvent.change(cnpjInput, { target: { value: companyData.cnpj } });

  const addressInput = screen.getByPlaceholderText("Endereço*");
  fireEvent.change(addressInput, { target: { value: companyData.address } });

  const sendButton = screen.getByText("Enviar");
  fireEvent.click(sendButton);

  expect(mockCompanyContext.setCompanyValue).toBeCalledWith([companyData]);
});

test("change filterSearch on type", async () => {
  render(<App />);
  const companyTab = screen.getByText("Empresas");
  fireEvent.click(companyTab);
  const input = screen.getByTestId("columns-search");
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "Seguro" } });

  expect(screen.getByText("Contato Seguro")).toBeInTheDocument();
});
