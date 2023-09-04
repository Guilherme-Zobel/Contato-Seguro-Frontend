import { useState } from "react";
import { Tabs } from "./components/Tabs";
import { UserProvider } from "./Context/UserContext";
import { GlobalStyle } from "./styles/global";
import { UserSection } from "./components/Section/user"
import { UserModal } from "./components/Modal.tsx/UserModal";
import { Container } from "./components/Section/styles";
import dictionary from "./utils/dictionary";

function App() {
  const [isNewRegistrationModalOpen, setIsNewRegistrationModalOpen] = useState(false);

  const [selectedSection, setSelectedSection] = useState(
    dictionary.userSection
  );

  function handleOpenModal() {
    setIsNewRegistrationModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewRegistrationModalOpen(false);
  }

  return (
    <UserProvider>
      <Container>
        <Tabs
          setSelectedSection={setSelectedSection}
          selectedSection={selectedSection}
          />
        <UserSection
          openModal={handleOpenModal}
        />
        <UserModal
          isOpen={isNewRegistrationModalOpen}
          closeModal={handleCloseModal}
        />
      </Container>
      <GlobalStyle />
    </UserProvider>
  )
}

export default App;
