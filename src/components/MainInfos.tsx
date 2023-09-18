import styled from "styled-components";
import NumberInfo from "./NumberInfo";
import Overview from "./Overview";
import { Types } from "./NumberInfo";
import planetImages from "./PlanetImages";

interface AddTypes extends Types {
  windowWidth: number;
  image: keyof typeof planetImages;
  title: string;
  review: string;
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
}: AddTypes) => {
  const PlanetImage = planetImages[image];

  return (
    <Main>
      <aside>
        <img src={PlanetImage.planet} alt="" />
        <Div>
          <section>
            <h2>{title}</h2>
            <p>{review}</p>
            <a href="#">Wikipedia</a>
          </section>
          {windowWidth >= 768 && <Overview />}
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
    max-width: 17.3rem;
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    padding: 9.6rem 3.9rem 3.6rem 4rem;
    div {
      text-align: left;
    }
    img {
      max-width: 28.5rem;
      width: 100%;
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
  }

  @media (min-width: 1025px) {
    border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
    aside {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 18rem;
    }
    img {
      max-width: 45rem;
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
  }

  @media (min-width: 1025px) {
    div p {
      cursor: pointer;
    }
    div p:hover {
      background-color: rgba(216, 216, 216, 0.2);
    }
  }
`;
