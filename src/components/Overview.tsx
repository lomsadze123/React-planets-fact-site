import styled from "styled-components";

export interface OverviewTypes {
  overviewContext: string;
  structureContext: string;
  geologyContext: string;
  paragraph: string;
  setParagraph: (text: string) => void;
  color: string;
}

const Overview = ({ paragraph, setParagraph, color }: OverviewTypes) => {
  return (
    <Div>
      <P
        color={paragraph === "overview" ? color : "none"}
        opacity={paragraph === "overview"}
        onClick={() => {
          setParagraph("overview");
        }}
      >
        Overview
      </P>
      <P
        color={paragraph === "structure" ? color : "none"}
        opacity={paragraph === "structure"}
        onClick={() => setParagraph("structure")}
      >
        Structure
      </P>
      <P
        color={paragraph === "surface" ? color : "none"}
        opacity={paragraph === "surface"}
        onClick={() => setParagraph("surface")}
      >
        Surface
      </P>
    </Div>
  );
};

console.log();

export default Overview;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
  padding: 0 2.4rem;
`;

const P = styled.p<{ color: string; opacity: boolean }>`
  color: #fff;
  font-size: 0.9rem;
  letter-spacing: 0.1929rem;
  text-transform: uppercase;
  opacity: 0.5;
  padding: 2rem 0;
  font-weight: 700;
  opacity: ${(props) => (props.opacity ? 1 : 0.5)};
  border-bottom: 0.3rem solid ${(props) => props.color};

  @media (min-width: 768px) {
    background-color: ${(props) => props.color};
    font-size: 1.2rem;
  }
`;
