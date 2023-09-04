import { fireEvent, render, screen } from "@testing-library/react";
import React, { Dispatch, SetStateAction } from "react";
import App from "../../App";
import usersJson from "../../data/user.json";
import { formatPhone } from "../../utils/formatPhone";
import moment from "moment";
import { IUserValue } from "../../Context/UserContext";
import { UserSection } from "../../components/Section/UserSection";
import { UserContext } from "../../Context/UserContext";
import mockUserContext from "../utils/userContext";
import { Tabs } from "../../components/Tabs";
import dictionary from "../../utils/dictionary";

test("Should show the list of users", () => {
  render(<App />);

  const users = usersJson.rows;

  users.map((user) => {
    expect(screen.getByText(user.name)).toBeTruthy();
    expect(screen.getByText(user.email)).toBeTruthy();
    expect(screen.getByText(formatPhone(user.phone))).toBeTruthy();
    expect(
      screen.getByText(moment(user.birthdate).format("DD/MM/YYYY"))
    ).toBeTruthy();
    expect(screen.getByText(user.city)).toBeTruthy();
  });
});

test("should insert an user", () => {
  render(<App />);
  const insertButton = screen.getByText("+");
  fireEvent.click(insertButton);

  const newUserData: IUserValue = {
    id: 0,
    name: "Nome de Teste",
    companies: [
      {
        id: 1,
        name: "Contato Seguro",
      },
      {
        id: 2,
        name: "Compliance Total",
      },
    ],
    email: "teste@teste.teste",
    phone: "(61) 98765-4321",
    birthdate: "2010-10-10",
    city: "Lavras",
    icons: "null",
  };

  const nameInput = screen.getByPlaceholderText("Nome*");
  fireEvent.change(nameInput, { target: { value: newUserData.name } });

  const emailInput = screen.getByPlaceholderText("E-mail*");
  fireEvent.change(emailInput, { target: { value: newUserData.email } });

  const selectInput = screen.getByText("Selecione suas empresas...");
  newUserData.companies.map((company) => {
    fireEvent.click(selectInput);
    fireEvent.click(screen.getByText(company.name));
  });

  const phoneInput = screen.getByPlaceholderText("(00) 00000-0000");
  fireEvent.change(phoneInput, { target: { value: newUserData.phone } });

  const birthdateInput = screen.getByPlaceholderText("Data de Nascimento");
  fireEvent.change(birthdateInput, {
    target: { value: newUserData.birthdate },
  });

  const cityInput = screen.getByPlaceholderText("Cidade onde nasceu");
  fireEvent.change(cityInput, { target: { value: newUserData.city } });

  const sendButton = screen.getByText("Enviar");
  fireEvent.click(sendButton);

  expect(screen.queryByText("Inserir")).toBe(null);
  expect(screen.getByText(newUserData.name)).toBeTruthy();
  expect(screen.getByText(newUserData.email)).toBeTruthy();
  expect(screen.getByText(formatPhone(newUserData.phone))).toBeTruthy();
  expect(
    screen.getByText(moment(newUserData.birthdate).format("DD/MM/YYYY"))
  ).toBeTruthy();
  expect(screen.getByText(newUserData.city)).toBeTruthy();
});

test("should delete an user", () => {
  const { container } = render(<App />);
  const firstLine = container.querySelectorAll("tbody tr")[0];
  const firstLineName = firstLine.querySelectorAll("td")[0].innerHTML;

  const firstLineDeleteIcon =
    firstLine.querySelectorAll("td > button > svg")[0];

  fireEvent.click(firstLineDeleteIcon);
  expect(screen.queryByText(firstLineName)).toBeNull();
});

test("should update an user", () => {
  const { container } = render(<App />);

  const newUserData: IUserValue = {
    id: 0,
    name: "Nome de Teste",
    companies: [
      {
        id: 1,
        name: "Contato Seguro",
      },
      {
        id: 2,
        name: "Compliance Total",
      },
    ],
    email: "teste@teste.teste",
    phone: "(61) 98765-4321",
    birthdate: "2010-10-10",
    city: "Lavras",
    icons: "null",
  };

  expect(screen.queryByText(newUserData.name)).toBeNull();
  expect(screen.queryByText(newUserData.email)).toBeNull();
  expect(screen.queryByText(formatPhone(newUserData.phone))).toBeNull();
  expect(
    screen.queryByText(moment(newUserData.birthdate).format("DD/MM/YYYY"))
  ).toBeNull();
  expect(screen.queryByText(newUserData.city)).toBeNull();

  const firstLine = container.querySelectorAll("tbody tr")[0];
  const firstLineName = firstLine.querySelectorAll("td")[0].innerHTML;

  const firstLineUpdateIcon =
    firstLine.querySelectorAll("td > button > svg")[1];

  fireEvent.click(firstLineUpdateIcon);

  const nameInput = screen.getByPlaceholderText("Nome*");
  fireEvent.change(nameInput, { target: { value: newUserData.name } });

  const emailInput = screen.getByPlaceholderText("E-mail*");
  fireEvent.change(emailInput, { target: { value: newUserData.email } });

  const selectInput = screen
    .getByTestId("select-companies")
    .querySelector("custom-select");
  newUserData.companies.map((company) => {
    if (selectInput) {
      fireEvent.click(selectInput);
      fireEvent.click(screen.getByText(company.name));
    }
  });

  const phoneInput = screen.getByPlaceholderText("(00) 00000-0000");
  fireEvent.change(phoneInput, { target: { value: newUserData.phone } });

  const birthdateInput = screen.getByPlaceholderText("Data de Nascimento");
  fireEvent.change(birthdateInput, {
    target: { value: newUserData.birthdate },
  });

  const cityInput = screen.getByPlaceholderText("Cidade onde nasceu");
  fireEvent.change(cityInput, { target: { value: newUserData.city } });

  const sendButton = screen.getByText("Enviar");
  fireEvent.click(sendButton);

  expect(screen.queryByText("Inserir")).toBe(null);
  expect(screen.getByText(newUserData.name)).toBeTruthy();
  expect(screen.getByText(newUserData.email)).toBeTruthy();
  expect(screen.getByText(formatPhone(newUserData.phone))).toBeTruthy();
  expect(
    screen.getByText(moment(newUserData.birthdate).format("DD/MM/YYYY"))
  ).toBeTruthy();
  expect(screen.getByText(newUserData.city)).toBeTruthy();
});

test("should filter data from user table", () => {
  render(<App />);
  const columnsSearchInput = screen.getByTestId("columns-search");
  fireEvent.change(columnsSearchInput, { target: { values: "email" } });
  const searchInput = screen.getByPlaceholderText("Buscar...");
  fireEvent.change(searchInput, { target: { value: "Nome de Teste" } });
  expect(screen.getByText("Nome de Teste")).toBeTruthy();
  expect(screen.queryByText("Anderson")).toBeNull();
});

afterEach(() => {
  jest.clearAllMocks();
});

test("Open modal on click + (plus) button", () => {
  let mockValue = false;
  const mockOpenModal = jest.fn(() => (mockValue = true)) as () => void;

  render(
    <UserContext.Provider value={mockUserContext}>
      <UserSection handleOpenModal={mockOpenModal} />
    </UserContext.Provider>
  );
  const plusButton = screen.getByText("+");
  plusButton.click();

  expect(mockOpenModal).toHaveBeenCalled();
  expect(mockValue).toBeTruthy();
});

