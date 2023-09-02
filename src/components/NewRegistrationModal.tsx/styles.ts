import styled from "styled-components";
import { darken } from 'polished'

export const Cointainer = styled.form`
 h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: var(--gray-900);
    border-bottom: 1px solid var(--gray-300);
  }
  input {
    width: 100%;
    transition: border-color 0.2s;
    padding: 0 1.5rem;
    margin-top: 1rem;
    height: 4rem;
    font-weight: 400;
    font-size: 1rem;
    border: 1px solid var(--gray-200);
    border-radius: 0.25rem;
    background: var(--gray-150);

    &::placeholder {
      color: var(--grey--900);
    }

    &:focus {
    outline: 0;
    box-shadow: 0 0 0 0;
    border-color: ${darken(0.1, '#d7d7d7')};
    } 
  }

  select {
    width: 100%;
    transition: border-color 0.2s;
    padding: 0 1.5rem;
    height: 4rem;
    font-weight: 400;
    font-size: 1rem;
    border: 1px solid var(--gray-200);
    border-radius: 0.25rem;
    background: var(--gray-150);

    &:focus {
    outline: 0;
    box-shadow: 0 0 0 0;
    border-color: ${darken(0.1, '#d7d7d7')};
    } 
  }
  span {
    font-size: 12px;
    color: var(--gray-700);
    margin-left: 5px;
  }
`;

export const StyledSideBySideInputs = styled.div`
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  display: grid;
  button {
    transition: border-color 0.2s;
    margin-top: 2rem;
    justify-content: center;
    height: 4rem;
    display: flex;
    color: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 0.25rem;
    background: var(--gray-850);
    align-items: center;
    &:hover {
      border-color: ${darken(0.1, '#323238')};
    }
    img {
      width: 20px;
      height: 20px;
    }
    span {
      margin-left: 1rem;
      font-size: 1rem;
      display: inline-block;
      color: var(--text-title);
    }
  }
`;