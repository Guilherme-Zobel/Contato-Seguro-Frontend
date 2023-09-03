import logoImg from '../../assets/logo.png'
import { RegistrationTable } from '../RegistrationTable';
import { SearchFilter } from '../SearchFilters';
import { Container, Content } from './styles'

interface FormProps {
  onOpenNewRegistrationModal: () => void;
}

export function FormElements({ onOpenNewRegistrationModal }: FormProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="incrementar" onClick={onOpenNewRegistrationModal}/>
        <button type="button" onClick={onOpenNewRegistrationModal}>
          <span>+</span>
        </button>
      </Content>
      <SearchFilter/>
      <RegistrationTable/>
    </Container>
  )
}