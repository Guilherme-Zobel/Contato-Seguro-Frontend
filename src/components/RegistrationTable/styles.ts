import styled from "styled-components";

const breakpoints = {
  small: '767px',
  medium: '992px',
  large: '1200px',
};

export const Container = styled.div`
  padding: 20px;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--gray-300);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      border-bottom: 1px solid var(--gray-300);
      border-top: 1px solid var(--gray-300);
      white-space: nowrap; 
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      color: var(--gray-900);
      border-radius: 0.25rem;
      white-space: nowrap;
      button {
       display: flex;
       align-items: center;
       justify-content: center;
       font-size: 20px;
       gap: 20px;
       background: transparent;
       border: none;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.large}) {
    overflow-x: auto;
  }
`;