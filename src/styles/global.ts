import { createGlobalStyle } from 'styled-components'
import backgroundImage from '../assets/backgound.jpg'

export const GlobalStyle = createGlobalStyle`
  :root {
  --white: #fff;

  --gray-100: #e1e1e6;
  --gray-150: #e7e9ee;
  --gray-200: #d7d7d7;
  --gray-300: #a8a8b3;
  --gray-700: #323238;
  --gray-800: #29292e;
  --gray-850: #1f2729;
  --gray-900: #121214;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 16px
    }
  }

  body {
    width: 100vw;
    height: 100vh;
    background: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

.react-modal-overlay {
    top: 0;
    right: 0;
    position: fixed;
    left: 0;
    justify-content: center;
    display: flex;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
  }

   .react-modal-content {
     width: 100%;
     position: relative;
     padding: 3rem;
     max-width: 576px;
     border-radius: 0.25rem;
     background: var(--gray-100);
   }
   
  .react-modal-close {
    transition: filter 0.2s;
    top: 1.5rem;
    right: 1.5rem;
    position: absolute;
    border: 0;
    background: transparent;
    &:hover {
      filter: brightness(0.8);
    }
  }
`