import styled from "styled-components";
import { darken } from 'polished'

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 100px;
button {
  height: 3rem;
  font-size: 1.2rem;
  border: 0.01px solid #d7d7d7;
  background: #e7e9ee;
  border-radius: 0.15rem;
  color: #323238;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
    border-radius: 0.25rem;
  }
}
`;