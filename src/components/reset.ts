import { createGlobalStyle } from "styled-components";
import background from "../assets/background-stars.svg";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
  --mercury-small: 111px;
  --venus-small: 154px;
  --earth-small: 173px;
  --mars-small: 129px;
  --jupiter-small: 224px;
  --saturn-small: 256px;
  --uranus-small: 176px;
  --neptune-small: 173px;

  --mercury-medium: 184px;
  --venus-medium: 235px;
  --earth-medium: 285px;
  --mars-medium: 213px;
  --jupiter-medium: 369px;
  --saturn-medium: 422px;
  --uranus-medium: 290px;
  --neptune-medium: 285px;

  --mercury-big: 290px;
  --venus-big: 400px;
  --earth-big: 450px;
  --mars-big: 336px;
  --jupiter-big: 582px;
  --saturn-big: 666px;
  --uranus-big: 458px;
  --neptune-big: 450px;

  --1-color: #DEF4FC;;
  --2-color: #F7CC7F;
  --3-color: #545BFE;
  --4-color: #FF6A45;
  --5-color: #ECAD7A;
  --6-color: #FCCB6B;
  --7-color: #65F0D5;
  --8-color: #497EFA;
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
