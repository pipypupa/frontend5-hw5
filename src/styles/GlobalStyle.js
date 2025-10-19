import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #fff8dc;
    color: #333;
  }

  h1 {
    text-align: center;
    font-size: 55px;
    width: 91%;
    margin: 30px auto 50px;
  }

  h2 {
  height: 56px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;
