import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { UserProvider } from "./Context/UserContext";
import { Container } from "./components/Section/styles";
import { Tabs } from "./components/Tabs";
import { CompanyProvider } from "./Context/CompanyContext";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

export function App() {
  return (
    <CompanyProvider>
      <UserProvider>
        <Container>
          <Tabs />
        </Container>
        <GlobalStyle />
      </UserProvider>
    </CompanyProvider>
  );
}
export default App;
