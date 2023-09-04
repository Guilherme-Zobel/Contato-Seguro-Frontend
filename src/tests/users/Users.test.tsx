import { render, screen } from "@testing-library/react";
import App from "../../App";
import usersJson from "../../data/user.json";
import { formatPhone } from "../../utils/formatPhone";
import moment from "moment";


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
