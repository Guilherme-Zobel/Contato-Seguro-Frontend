import { useState } from "react";
import { Container, selectedTab } from "./styles";
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
      <button
        style={selectedSection === dictionary.userSection ? selectedTab : {}}
        onClick={() => setSelectedSection(dictionary.userSection)}>
        Usuários
      </button>
      <button
        style={selectedSection === dictionary.companySection ? selectedTab : {}}
        onClick={() => setSelectedSection(dictionary.companySection)}>
        Empresas
      </button>
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