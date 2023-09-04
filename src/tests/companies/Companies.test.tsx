import { render, screen, fireEvent } from "@testing-library/react";
import { CompanyContext, ICompanyValue } from "../../Context/CompanyContext";
import { CompanyModal } from "../../components/Modal.tsx/CompanyModal";
import mockCompanyContext from "../utils/companyContext";

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