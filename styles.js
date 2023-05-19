import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Avenir', monospace;
    margin: 0 auto;
    justify-content: center;
    max-width: 800px;
    background: rgb(221, 235, 253);
    
  }
`;
