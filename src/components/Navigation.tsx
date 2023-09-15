import styled from "styled-components";
import menu from "../assets/menu.svg";
import Overview from "./Overview";
import MainInfos from "./MainInfos";
import arrow from "../assets/arrow.svg";
import { useEffect, useMemo, useRef, useState } from "react";

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

  const [hide, setHide] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    let timeOut: number;

    const debounced = () => {
      clearTimeout(timeOut);
      timeOut = setTimeout(handleWindowWidth, 10);
    };

    window.addEventListener("resize", debounced);

    return () => {
      window.removeEventListener("resize", debounced);
    };
  }, []);

  return (
    <Div>
      <header>
        <div>
          <h1>THE PLANETS</h1>
          {windowWidth < 768 && (
            <img
              onClick={() => setHide(!hide)}
              src={menu}
              alt="burger-bar menu"
            />
          )}
        </div>
        {(windowWidth >= 768 || hide) && (
          <nav>
            <ul>
              {planetsList.map((planet) => (
                <aside key={planet}>
                  <li>{planet}</li>
                </aside>
              ))}
            </ul>
          </nav>
        )}
      </header>
      {windowWidth < 768 && <Overview />}
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
  header img {
    max-width: 2.4rem;
    width: 100%;
    height: auto;
  }
  nav li {
    color: hsl(0, 0%, 100%);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 2.5rem;
    letter-spacing: 0.1364rem;
    list-style: none;
    padding: 2rem 0;
    flex-grow: 1;
  }
  header div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 2.4rem;
  }
  ul {
    position: absolute;
    top: 6.9rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #070724;
    padding: 3rem 3.2rem 0 2.4rem;
    z-index: 1;
  }
  aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
  }
  nav li::before {
    margin-right: 2.5rem;
    content: "";
    background-color: #def4fc;
    border-radius: 50%;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
  }
  nav aside::after {
    content: "";
    background: url(${arrow}) no-repeat;
    display: inline-block;
    width: 0.6rem;
    height: 1rem;
  }

  @media (min-width: 768px) {
    header div {
      justify-content: center;
      padding: 3.2rem 0 2.5rem 0;
    }
    ul {
      display: flex;
      justify-content: space-between;
      padding: 0 5.1rem;
      position: static;
      border-bottom: 0.2rem solid rgba(255, 255, 255, 0.1);
    }
    nav li {
      font-size: 1.1rem;
      letter-spacing: 0.1rem;
      flex-grow: 0;
    }
    nav li::before,
    nav aside::after {
      content: none;
    }
    aside {
      border: 0;
    }
  }
`;
