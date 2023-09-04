import logoImg from '../../assets/logo.png'
import { CompanyFilter } from '../Filter/CompanyFilter';
import { CompanyTable } from '../RegistrationTable/CompanyTable';
import { Content } from './styles'
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';

interface ComapanySectionProps {
  openModal: () => void;
}


export function CompanySection({ openModal }: ComapanySectionProps) {
  const {setIdRegistration} = useContext(UserContext)

  function handleOpenModal() {
    openModal()
    setIdRegistration(0)
  }
  return (
    <>
      <Content>
        <img src={logoImg} alt="logo-contato-seguro" />
        <button type="button" onClick={() => handleOpenModal()}>
          <span>+</span>
        </button>
      </Content>
      <CompanyFilter/>
      <CompanyTable openModal={openModal}/>
    </>
  )
}