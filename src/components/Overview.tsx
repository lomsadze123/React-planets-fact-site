import styled from "styled-components";

const Overview = () => {
  return (
    <Div>
      <p>Overview</p>
      <p>Structure</p>
      <p>Surface</p>
    </Div>
  );
};

export default Overview;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
  padding: 2rem 2.4rem;
  p {
    color: #fff;
    font-size: 0.9rem;
    letter-spacing: 0.1929rem;
    text-transform: uppercase;
    opacity: 0.5;
  }
`;
