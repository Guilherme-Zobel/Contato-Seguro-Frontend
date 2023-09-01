import logoImg from '../../assets/logo.png'
import { Container, Content } from './styles'

export function FormElements() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="incrementar" />
        <button type="button">
          <span>+</span>
        </button>
      </Content>
    </Container>
  )
}