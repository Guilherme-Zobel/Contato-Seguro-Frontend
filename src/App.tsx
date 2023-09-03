import { useState } from "react";
import { UserProvider } from "./Context/UserContext";
import { GlobalStyle } from "./styles/global";
import { FormElements } from "./components/FormElements"
import { UserModal } from "./components/Modal.tsx/UserModal";

function App() {
  const [isNewRegistrationModalOpen, setIsNewRegistrationModalOpen] = useState(false);

  function hanleOpenNewRegistrationModal() {
    setIsNewRegistrationModalOpen(true);
  }

  function hanleCloseNewRegistrationModal() {
    setIsNewRegistrationModalOpen(false);
  }

  return (
    <UserProvider>
      <FormElements
        onOpenNewRegistrationModal={hanleOpenNewRegistrationModal}
        isOpenModal={hanleOpenNewRegistrationModal}
      />
      <UserModal
        isOpen={isNewRegistrationModalOpen}
        onRequestClose={hanleCloseNewRegistrationModal}
      />
      <GlobalStyle />
    </UserProvider>
  )
}

export default App;
