import styled from "styled-components";
import menu from "../assets/menu.svg";
import Overview from "./Overview";
import MainInfos from "./MainInfos";
import arrow from "../assets/arrow.svg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { PlanetType, planetsList, PlanetData } from "./PlanetData";
import planetImages from "./PlanetImages";

const Navigation = () => {
  const [hide, setHide] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [planet, setPlanet] = useState("earth");
  const [planetData, setPlanetData] = useState<PlanetType>(PlanetData);
  const ref = useRef(true);
  const [paragraph, setParagraph] = useState("overview");

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get(
          "https://planets-api.vercel.app/api/v1/planets/" + planet
        );
        const data = response.data;
        if (ref.current) {
          ref.current = false;
        } else {
          setPlanetData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlanets();
  }, [planet]);

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

  const handlePlanets = (planet: string) => {
    setPlanet(planet);
    setHide(false);
  };

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
              {planetsList.map((planet1, index) => (
                <aside key={planet1}>
                  <Li
                    index={index + 1}
                    color={
                      planet1 === planet ? planetData?.color ?? "" : "none"
                    }
                    onClick={() => handlePlanets(planet1)}
                  >
                    {planet1}
                  </Li>
                </aside>
              ))}
            </ul>
          </nav>
        )}
      </header>
      {windowWidth < 768 && (
        <Overview
          overviewContext={planetData?.overview.content ?? ""}
          structureContext={planetData?.structure.content ?? ""}
          geologyContext={planetData?.geology.content ?? ""}
          paragraph={paragraph}
          setParagraph={setParagraph}
          color={planetData?.color ?? ""}
        />
      )}
      <MainInfos
        windowWidth={windowWidth}
        image={
          planetData?.name.toLocaleLowerCase() as keyof typeof planetImages
        }
        title={planetData?.name ?? ""}
        review={planetData?.overview.content ?? ""}
        rotation={planetData?.rotation ?? ""}
        revolution={planetData?.revolution ?? ""}
        radius={planetData?.radius ?? ""}
        temperature={planetData?.temperature ?? ""}
        overviewContext={planetData?.overview.content ?? ""}
        structureContext={planetData?.structure.content ?? ""}
        geologyContext={planetData?.geology.content ?? ""}
        setParagraph={setParagraph}
        paragraph={paragraph}
        color={planetData?.color ?? ""}
      />
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
  nav aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
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
      padding: 3.2rem 0 1.5rem 0;
    }
    ul {
      display: flex;
      justify-content: space-between;
      padding: 0 5.1rem;
      position: static;
      border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
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
    nav aside {
      border: 0;
      display: block;
    }
  }

  @media (min-width: 1025px) {
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      max-width: 146.8rem;
      margin: 0 auto;
    }
    header div {
      display: block;
      padding: 0;
    }
    ul {
      border: 0;
      padding: 0;
      gap: 3.3rem;
    }
    nav li {
      padding: 3.3rem 0 2.7rem 0;
      opacity: 0.75;
      cursor: pointer;
      transition: box-shadow 350ms ease;
    }
  }
`;

const Li = styled.li<{ color: string; index: number }>`
  &::before {
    margin-right: 2.5rem;
    content: "";
    background-color: var(${(props) => `--${props.index}-color`});
    border-radius: 50%;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
  }

  @media (min-width: 768px) {
    box-shadow: 0 0.4rem 0 ${(props) => props.color} inset;
    transition: box-shadow 350ms ease;

    &:hover {
      opacity: 1;
      box-shadow: 0 0.4rem 0 ${(props) => props.color} inset !important;
    }
  }
`;
