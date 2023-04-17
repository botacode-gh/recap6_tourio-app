import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial Rounded MT Bold', monospace;
    margin: 0 auto;
    background: rgb(196, 210, 228);
    background: linear-gradient(
    180deg,
    rgba(196, 210, 228, 1) 0%,
    rgba(255, 255, 255, 1) 97%,
    rgba(196, 210, 228, 1) 100%
    );
    
  }
`;
