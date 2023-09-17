import { useState } from "react";
import { Container, TabButton } from "./styles";
import { UserSection } from "../Section/UserSection";
import { CompanySection } from "../Section/CompanySection";
import { UserModal } from "../Modal.tsx/UserModal";
import { CompanyModal } from "../Modal.tsx/CompanyModal";
import dictionary from "../../utils/dictionary";

export function Tabs() {
  const [selectedSection, setSelectedSection] = useState(dictionary.userSection);

  return (
    <>
    <Container>
      <TabButton
        className={selectedSection === dictionary.userSection ? 'selected' : ''}
        onClick={() => setSelectedSection(dictionary.userSection)}>
        Usuários
      </TabButton>
      <TabButton
        className={selectedSection === dictionary.companySection ? 'selected' : ''}
        onClick={() => setSelectedSection(dictionary.companySection)}>
        Empresas
      </TabButton>
    </Container>
    {selectedSection === dictionary.userSection && (
        <>
          <UserSection />
          <UserModal />
        </>
    )}
    {selectedSection === dictionary.companySection && (
        <>
          <CompanySection/>
          <CompanyModal/>
        </>
    )}
    </>
  )
}