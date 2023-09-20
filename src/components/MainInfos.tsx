import styled, { keyframes } from "styled-components";
import NumberInfo from "./NumberInfo";
import Overview from "./Overview";
import { Types } from "./NumberInfo";
import planetImages from "./PlanetImages";
import { OverviewTypes } from "./Overview";
import { useEffect, useState } from "react";

interface AddTypes extends Types, OverviewTypes {
  windowWidth: number;
  image: keyof typeof planetImages;
  title: string;
  review: string;
  paragraph: string;
}

const MainInfos = ({
  windowWidth,
  image = "earth",
  title,
  review,
  rotation,
  revolution,
  radius,
  temperature,
  overviewContext,
  structureContext,
  geologyContext,
  setParagraph,
  paragraph,
  color,
}: AddTypes) => {
  const PlanetImage = planetImages[image];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 800);
    return () => {
      clearTimeout(timeout);
    };
  }, [image]);

  if (paragraph === "overview") {
    review = overviewContext;
  } else if (paragraph === "structure") {
    review = structureContext;
  } else if (paragraph === "surface") {
    review = geologyContext;
  }

  return (
    <Main>
      <aside>
        {paragraph === "overview" && (
          <Img
            animate={animate}
            image={image}
            src={PlanetImage.planet}
            alt={image}
          />
        )}
        {paragraph === "structure" && (
          <Img
            animate={animate}
            image={image}
            src={PlanetImage.internal}
            alt={image}
          />
        )}
        {paragraph === "surface" && (
          <span>
            <Img
              animate={animate}
              image={image}
              src={PlanetImage.planet}
              alt={image}
            />
            <img className="geology" src={PlanetImage.geology} alt={image} />
          </span>
        )}
        <Div>
          <section>
            <h2>{title}</h2>
            <p>{review}</p>
            <a href="#">Wikipedia</a>
          </section>
          {windowWidth >= 768 && (
            <Overview
              overviewContext={overviewContext}
              structureContext={structureContext}
              geologyContext={geologyContext}
              paragraph={paragraph}
              setParagraph={setParagraph}
              color={color}
            />
          )}
        </Div>
      </aside>
      <NumberInfo
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
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
    margin: 0 0 1.6rem 0;
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
    width: 50%;
    height: auto;
  }

  span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .geology {
    position: absolute;
    max-width: 11rem;
    width: 100%;
    height: auto;
    top: 60%;
  }

  span img {
    width: 100%;
  }

  @media (min-width: 768px) {
    padding: 9.6rem 3.9rem 3.6rem 4rem;
    div {
      text-align: left;
    }
    div h2 {
      font-size: 4.8rem;
      margin: 0;
    }
    a {
      padding: 0;
    }
    h2 + p {
      max-width: 33.9rem;
      margin: 2.4rem 0 3.2rem 0;
    }
    .geology {
      max-width: 16.3rem;
    }
  }

  @media (min-width: 1025px) {
    border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
    aside {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 18rem;
    }
    h2 + p,
    a {
      max-width: 35rem;
      font-size: 1.4rem;
      line-height: 2.5rem;
    }
    div h2 {
      font-size: 8rem;
    }
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7.9rem 0 2.7rem 0;
  div {
    padding: 0;
    border: 0;
    flex-direction: column;
    gap: 1.6rem;
  }
  div p {
    width: 28.1rem;
    line-height: 2.5rem;
    padding: 0;
    opacity: 1;
    padding: 0.8rem 0 0.7rem 2rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
    counter-increment: css-counter 1;
  }
  div p::before {
    content: "0" counter(css-counter) "ㅤ ";
    opacity: 0.5;
  }

  @media (min-width: 1025px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0;

    div p {
      width: 35rem;
      padding: 1.2rem 0 1.1rem 3.4rem;
    }
    a {
      margin-bottom: 3.9rem;
    }
    div p {
      cursor: pointer;
    }
    div p:hover {
      background-color: rgba(216, 216, 216, 0.2);
    }
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: .75;
  }
  100% {
    opacity: 1;
  }
`;

const Img = styled.img<{ image: string; animate: boolean }>`
  animation: ${(props) => (props.animate ? fadeIn : "none")} 1s ease-in-out;
  max-width: var(${(props) => `--${props.image}-small`});

  @media (min-width: 768px) {
    max-width: var(${(props) => `--${props.image}-medium`});
  }

  @media (min-width: 1025px) {
    max-width: var(${(props) => `--${props.image}-big`});
  }
`;
