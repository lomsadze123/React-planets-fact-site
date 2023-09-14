import styled from "styled-components";
import menu from "../assets/menu.svg";
import Overview from "./Overview";
import MainInfos from "./MainInfos";

const Navigation = () => {
  const planetsList = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  return (
    <Div>
      <header>
        <div>
          <h1>THE PLANETS</h1>
          <img src={menu} alt="burger-bar menu" />
        </div>
        {/* <nav>
          <ul>
            {planetsList.map((planet) => (
              <li>{planet}</li>
            ))}
          </ul>
        </nav> */}
      </header>
      <Overview />
      <MainInfos />
    </Div>
  );
};

export default Navigation;

const Div = styled.div`
  h1 {
    font-size: 2.8rem;
    letter-spacing: -0.105rem;
  }
  img {
    max-width: 2.4rem;
    width: 100%;
    height: auto;
  }
  nav li {
    color: hsl(0, 0%, 100%);
    font-size: 1.5rem;
    font-weight: 700;
    flex-grow: 1;
    text-transform: uppercase;
    font-size: 1.1rem;
    line-height: 2.5rem;
    letter-spacing: 0.1364rem;
    list-style: none;
  }
  header div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 2.4rem;
  }
`;
