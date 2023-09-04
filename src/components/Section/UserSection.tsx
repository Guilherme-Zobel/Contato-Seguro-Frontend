import logoImg from '../../assets/logo.png'
import { UserTable } from '../RegistrationTable/UserTable';
import { UserFilter } from '../Filter/UserFilter';
import { Container, Content } from './styles'
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

interface FormProps {
  handleOpenModal: () => void;
}

export function UserSection({ handleOpenModal }: FormProps) {
  const {setIdRegistration} = useContext(UserContext)

  function openEmptyModal() {
    handleOpenModal()
    setIdRegistration(0)
  }

  return (
    <Container>
      <Content>
      <img src={logoImg} alt="logo-contato-seguro"/>
        <button type="button" onClick={() => openEmptyModal()}>
          <span>+</span>
        </button>
      </Content>
      <UserFilter/>
      <UserTable handleOpenModal={handleOpenModal}/>
    </Container>
  )
}