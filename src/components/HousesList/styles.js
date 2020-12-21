import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 5%;
  height: 90vh;
  display: flex;
  align-items: center;
  background-color: #000;

  @media (max-width: 1400px) {
    height: auto;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;

    @media (max-width: 1400px) {
      justify-content: center;
    }
  }
`;
