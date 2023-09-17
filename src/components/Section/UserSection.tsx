import logoImg from '../../assets/logo.png'
import { UserTable } from '../RegistrationTable/UserTable';
import { UserFilter } from '../Filter/UserFilter';
import { Container, Content } from './styles'
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

export function UserSection() {
  const {setIdRegistration, setIsOpenModal} = useContext(UserContext);

  function openEmptyModal() {
    setIsOpenModal(true);
    setIdRegistration(0);
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
      <UserTable />
    </Container>
  )
}