import logoImg from '../../assets/logo.png'
import { UserTable } from '../RegistrationTable/UserTable';
import { UserFilter } from '../Filter/UserFilter';
import { Container, Content } from './styles'

interface FormProps {
  openModal: () => void;
}

export function FormElements({ openModal }: FormProps) {
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="logo-contato-seguro"/>
        <button type="button" onClick={() => openModal()}>
          <span>+</span>
        </button>
      </Content>
      <UserFilter/>
      <UserTable openModal={openModal}/>
    </Container>
  )
}