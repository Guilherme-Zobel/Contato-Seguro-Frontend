import logoImg from '../../assets/logo.png'
import { CompanyFilter } from '../Filter/CompanyFilter';
import { CompanyTable } from '../RegistrationTable/CompanyTable';
import { Content } from './styles'
import { CompanyContext } from '../../Context/CompanyContext';
import { useContext } from 'react';

interface ComapanySectionProps {
  handleOpenModal: () => void;
}


export function CompanySection({ handleOpenModal }: ComapanySectionProps) {
  const {setIdRegistration} = useContext(CompanyContext)

  function openEmptyModal() {
    handleOpenModal()
    setIdRegistration(0)
  }
  return (
    <>
      <Content>
        <img src={logoImg} alt="logo-contato-seguro" />
        <button type="button" onClick={() => openEmptyModal()}>
          <span>+</span>
        </button>
      </Content>
      <CompanyFilter/>
      <CompanyTable handleOpenModal={handleOpenModal}/>
    </>
  )
}