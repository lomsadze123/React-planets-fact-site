import { createGlobalStyle } from "styled-components";
import background from "../assets/background-stars.svg";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  h1 , h2 , h3 {
    font-family: 'Antonio', sans-serif;
    font-weight: 400;
    color: #FFF;
    text-transform: uppercase;
  }

  p , a , li {
    font-family: 'Spartan', sans-serif;
    font-weight: 400;
  }

  body {
    background: #070724 url(${background});
    position: relative;
  }

`;

export default GlobalStyle;
