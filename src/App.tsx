import { useState } from "react";
import { UserProvider } from "./Context/UserContext";
import { GlobalStyle } from "./styles/global";
import { UserSection } from "./components/Section/user"
import { UserModal } from "./components/Modal.tsx/UserModal";

function App() {
  const [isNewRegistrationModalOpen, setIsNewRegistrationModalOpen] = useState(false);

  function handleOpenModal() {
    setIsNewRegistrationModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewRegistrationModalOpen(false);
  }

  return (
    <UserProvider>
      <UserSection
        openModal={handleOpenModal}
      />
      <UserModal
        isOpen={isNewRegistrationModalOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </UserProvider>
  )
}

export default App;
