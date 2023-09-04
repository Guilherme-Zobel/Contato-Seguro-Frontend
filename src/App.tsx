import Modal from "react-modal";
import { useState } from "react";
import { UserSection } from "./components/Section/UserSection";
import { GlobalStyle } from "./styles/global";
import { UserModal } from "./components/Modal.tsx/UserModal";
import { UserProvider } from "./Context/UserContext";
import { Container } from "./components/Section/styles";
import { Tabs } from "./components/Tabs";
import { CompanySection } from "./components/Section/CompanySection";
import { CompanyProvider } from "./Context/CompanyContext";
import { CompanyModal } from "./components/Modal.tsx/CompanyModal";
import dictionary from "./utils/dictionary";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

export function App() {
  const [isOpenModal, setIsOpenModal] =
    useState(false);
  const [selectedSection, setSelectedSection] = useState(
    dictionary.userSection
  );

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <CompanyProvider>
      <UserProvider>
        <Container>
          <Tabs
            setSelectedSection={setSelectedSection}
            selectedSection={selectedSection}
          />
          {selectedSection === dictionary.userSection && (
            <>
              <UserSection handleOpenModal={handleOpenModal} />
              <UserModal
                isOpenModal={isOpenModal}
                closeModal={handleCloseModal}
              />
            </>
          )}
          {selectedSection === dictionary.companySection && (
            <>
              <CompanySection handleOpenModal={handleOpenModal} />
              <CompanyModal
                isOpenModal={isOpenModal}
                closeModal={handleCloseModal}
              />
            </>
          )}
        </Container>
        <GlobalStyle />
      </UserProvider>
    </CompanyProvider>
  );
}
export default App;
