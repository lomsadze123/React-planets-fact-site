import styled from "styled-components";

const NumberInfo = () => {
  return (
    <Article>
      <NumberInfoComponent text="ROTATION TIME" number="0.99 days" />
      <NumberInfoComponent text="REVOLUTION TIME" number="365.26 days" />
      <NumberInfoComponent text="RADIUS" number="6,371 km" />
      <NumberInfoComponent text="AVERAGE TEMP." number="16°c" />
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
`;
