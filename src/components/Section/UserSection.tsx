import logoImg from '../../assets/logo.png'
import { UserTable } from '../RegistrationTable/UserTable';
import { UserFilter } from '../Filter/UserFilter';
import { Container, Content } from './styles'

interface FormProps {
  handleOpenModal: () => void;
}

export function UserSection({ handleOpenModal }: FormProps) {
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="logo-contato-seguro"/>
        <button type="button" onClick={() => handleOpenModal()}>
          <span>+</span>
        </button>
      </Content>
      <UserFilter/>
      <UserTable handleOpenModal={handleOpenModal}/>
    </Container>
  )
}