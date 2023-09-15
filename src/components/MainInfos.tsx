import styled from "styled-components";
import earth from "../assets/planet-earth.svg";
import NumberInfo from "./NumberInfo";

const MainInfos = () => {
  return (
    <Main>
      <img src={earth} alt="" />
      <div>
        <h2>Earth</h2>
        <p>
          Third planet from the Sun and the only known planet to harbor life.
          About 29.2% of Earth's surface is land with remaining 70.8% is covered
          with water. Earth's distance from the Sun, physical properties and
          geological history have allowed life to evolve and thrive.
        </p>
        <a href="#">Wikipedia</a>
      </div>
      <NumberInfo />
    </Main>
  );
};

export default MainInfos;

const Main = styled.main`
  text-align: center;

  padding: 6.4rem 2.4rem 4.7rem 2.4rem;
  div h2 {
    font-size: 4rem;
    text-transform: uppercase;
    margin: 6.4rem 0 1.6rem 0;
  }
  h2 + p,
  a {
    font-size: 1.1rem;
    line-height: 2.2rem;
    color: #fff;
  }
  a {
    display: inline-block;
    font-size: 1.2rem;
    line-height: 2.5rem;
    padding: 1rem 0 2.8rem 0;
    opacity: 0.5;
  }
  a::before {
    content: "Source :ㅤ";
    font-weight: 400;
    display: inline-block;
    cursor: text;
  }
  img {
    max-width: 17.3rem;
    width: 100%;
    height: auto;
  }
`;
