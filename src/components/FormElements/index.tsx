import logoImg from '../../assets/logo.png'
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
        <SearchFilter/>
      </Content>
    </Container>
  )
}