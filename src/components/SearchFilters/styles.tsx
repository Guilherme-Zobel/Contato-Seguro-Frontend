import styled from "styled-components";
import { darken } from 'polished'

export const Container = styled.div`
  padding: 0 20px 20px 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 5.5rem;

 h2,p {
    color: var(--text-title);
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  input, select {
    width: 100%;
    padding: 0 1.5rem;
    height: 3.3rem;
    border-radius: 0.25rem;
    border: 1px solid var(--gray-200);;
    background: var(--gray-150);
    font-weight: 400;
    font-size: 1rem;
    transition: border-color 0.2s;

    &::placeholder {
      color: var(--gray-850);
    }

    &:focus {
    box-shadow: 0 0 0 0;
    border-color: ${darken(0.1, '#d7d7d7')};
    outline: 0;
    } 
  }
`;