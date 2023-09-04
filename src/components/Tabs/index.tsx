import { Container } from "./styles";
import dictionary from "../../utils/dictionary";

interface TabsProps {
  setSelectedSection: React.Dispatch<React.SetStateAction<number>>;
  selectedSection: number;
}

export function Tabs({setSelectedSection, selectedSection}: TabsProps) {

  return (
    <>
    <Container>
      <button
        style={selectedSection === dictionary.userSection ? {fontWeight: "600", borderColor: "#a8a8b3"} : {}}
        onClick={() => setSelectedSection(dictionary.userSection)}>
        Usuários
      </button>
      <button
        style={selectedSection === dictionary.companySection ? {fontWeight: "600", borderColor: "#a8a8b3"} : {}}
        onClick={() => setSelectedSection(dictionary.companySection)}>
        Empresas
      </button>
    </Container>
    </>
  )
}