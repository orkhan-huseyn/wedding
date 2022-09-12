import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #FCF9F0;
    font-family: Sedan, Poppins, serif;
    overflow: hidden;
  }

  #root {
    width: 100%;
    min-width: 320px;
    height: 100vh;
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;
    max-height: -webkit-fill-available;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes bounce {
    0% { transform: translateY(8px) scale(1); }
    25% { transform: translateY(-10px) scale(1.2); }
    50% { transform: translateY(8px) scale(1); }
    100% { transform: translateY(8px) scale(1); }
  }

  @keyframes wiggle {
    0% { transform: rotate(0deg) scale(1) ; }
    25% { transform: rotate(5deg) scale(1.01) ; }
    40% { transform: rotate(0deg) scale(1) ; }
    100% { transform: rotate(-5deg) scale(1.01) ; }
  }

  @keyframes hearbeat {
    0% { transform: scale(1) ; }
    10% { transform: scale(0.95) ; }
    15% { transform: scale(1.05) ; }
    20% { transform: scale(1) ; }

    50% { transform: scale(1) ; }
    55% { transform: scale(0.99) ; }
    60% { transform: scale(1.01) ; }
    65% { transform: scale(1) ; }

    100% { transform: scale(1) ; }
  }
`;
