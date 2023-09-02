import { useState } from "react";
import { Provider } from "./Context/Context";
import { GlobalStyle } from "./styles/global";
import { FormElements } from "./components/FormElements"
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
    <Provider>
      <FormElements onOpenNewRegistrationModal={hanleOpenNewRegistrationModal}/>

      <NewRegistrationModal
        isOpen={isNewRegistrationModalOpen}
        onRequestClose={hanleCloseNewRegistrationModal}/>
      <GlobalStyle />
    </Provider>
  )
}

export default App;
