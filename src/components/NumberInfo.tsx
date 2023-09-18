import styled from "styled-components";

export interface Types {
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

const NumberInfo = ({ rotation, revolution, radius, temperature }: Types) => {
  return (
    <Article>
      <NumberInfoComponent text="ROTATION TIME" number={rotation} />
      <NumberInfoComponent text="REVOLUTION TIME" number={revolution} />
      <NumberInfoComponent text="RADIUS" number={radius} />
      <NumberInfoComponent text="AVERAGE TEMP." number={temperature} />
    </Article>
  );
};

const NumberInfoComponent = ({
  text,
  number,
}: {
  text: string;
  number: string;
}) => {
  return (
    <Section>
      <p>{text}</p>
      <h2>{number}</h2>
    </Section>
  );
};

export default NumberInfo;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 127.8rem;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.1rem;
  }

  @media (min-width: 1025px) {
    gap: 3rem;
  }
`;

const Section = styled.section`
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  padding: 1.6rem 2.4rem;
  p {
    color: #fff;
    opacity: 0.5;
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.6rem;
    letter-spacing: 0.0727rem;
  }
  h2 {
    font-size: 2rem;
    letter-spacing: -0.075rem;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 25.5rem;
    padding: 1.6rem 0 1.9rem 1.5rem;
    gap: 0.6rem;

    h2 {
      font-size: 2.4rem;
    }
  }

  @media (min-width: 1025px) {
    margin-top: 8.7rem;
    gap: 0.8rem;
    padding: 2rem 0 3.4rem 2.3rem;
    p {
      font-size: 1.1rem;
    }
    h2 {
      font-size: 4rem;
      line-height: 5.176rem;
    }
  }
`;
