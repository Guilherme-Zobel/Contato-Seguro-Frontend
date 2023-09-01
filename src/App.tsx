import { GlobalStyle } from "./styles/global";
import { FormElements } from "./components/FormElements"
import { useState } from "react";
import { NewRegistrationModal } from "./components/NewRegistrationModal.tsx"

function App() {
  const [isNewRegistrationModalOpen, setIsNewRegistrationModalOpen] = useState(false);

  function hanleOpenNewRegistrationModal() {
    setIsNewRegistrationModalOpen(true);
  }

  function hanleCloseNewRegistrationModal() {
    setIsNewRegistrationModalOpen(false);
  }

  return (
    <>
      <FormElements onOpenNewRegistrationModal={hanleOpenNewRegistrationModal}/>

      <NewRegistrationModal
        isOpen={isNewRegistrationModalOpen}
        onRequestClose={hanleCloseNewRegistrationModal}/>
      <GlobalStyle />
    </>
  )
}

export default App;
