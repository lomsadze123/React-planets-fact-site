import styled from "styled-components";
import earth from "../assets/planet-earth.svg";

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
    </Main>
  );
};

export default MainInfos;

const Main = styled.main``;
