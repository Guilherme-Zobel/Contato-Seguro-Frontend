import styled from "styled-components";

export const Container = styled.header`
  background: var(--gray-100);
  max-width: 69.5rem;
  margin: 0 auto; 
  border-radius: 0.25rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 2rem 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: var(--gray-850);
    border: 0;
    padding: 0 1rem;
    border-radius: 0.25rem;
    height: 3rem;
 
    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.2);
    }
  }
  span {
    font-size: 2.3rem;
  }
`;