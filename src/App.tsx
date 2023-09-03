import { useState } from "react";
import { UserProvider } from "./Context/UserContext";
import { GlobalStyle } from "./styles/global";
import { FormElements } from "./components/FormElements"
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
      <FormElements
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
