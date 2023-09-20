import styled from "styled-components";

export interface OverviewTypes {
  overviewContext: string;
  structureContext: string;
  geologyContext: string;
  setParagraph: (text: string) => void;
}

const Overview = ({ setParagraph }: OverviewTypes) => {
  return (
    <Div>
      <p
        onClick={() => {
          setParagraph("overview");
        }}
      >
        Overview
      </p>
      <p onClick={() => setParagraph("structure")}>Structure</p>
      <p onClick={() => setParagraph("surface")}>Surface</p>
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
  p {
    color: #fff;
    font-size: 0.9rem;
    letter-spacing: 0.1929rem;
    text-transform: uppercase;
    opacity: 0.5;
    padding: 2rem 0;
    font-weight: 700;
  }
`;
