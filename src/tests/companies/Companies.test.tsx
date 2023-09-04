import { render, screen, fireEvent } from "@testing-library/react";
import { CompanyContext, ICompanyValue } from "../../Context/CompanyContext";
import { CompanyModal } from "../../components/Modal.tsx/CompanyModal";
import mockCompanyContext from "../utils/companyContext";
import React from "react";
import App from "../../App";

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

  const cnpjInput = screen.getByPlaceholderText("CNPJ");
  fireEvent.change(cnpjInput, { target: { value: companyData.cnpj } });

  const addressInput = screen.getByPlaceholderText("Endereço");
  fireEvent.change(addressInput, { target: { value: companyData.address } });

  const sendButton = screen.getByText("Enviar");
  fireEvent.click(sendButton);

  expect(mockCompanyContext.setCompanyValue).toBeCalledWith([companyData]);
});
