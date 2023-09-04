import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import usersJson from "../../data/user.json";
import { formatPhone } from "../../utils/formatPhone";
import moment from "moment";
import { IUserValue } from "../../Context/UserContext";

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
