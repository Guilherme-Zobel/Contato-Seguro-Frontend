import { useState } from "react";
import { Tabs } from "./components/Tabs";
import { UserProvider } from "./Context/UserContext";
import { GlobalStyle } from "./styles/global";
import { UserSection } from "./components/Section/UserSection"
import { UserModal } from "./components/Modal.tsx/UserModal";
import { Container } from "./components/Section/styles";
import dictionary from "./utils/dictionary";
import { CompanyProvider } from "./Context/CompanyContext";

function App() {
  const [isOpenModal, setIsModalOpen] = useState(false);

  const [selectedSection, setSelectedSection] = useState(
    dictionary.userSection
  );

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <CompanyProvider>
      <UserProvider>
        <Container>
          <Tabs
            setSelectedSection={setSelectedSection}
            selectedSection={selectedSection}
            />
          <UserSection
            handleOpenModal={handleOpenModal}
          />
          <UserModal
            isOpenModal={isOpenModal}
            closeModal={handleCloseModal}
          />
        </Container>
        <GlobalStyle />
      </UserProvider>
    </CompanyProvider>
  )
}

export default App;
