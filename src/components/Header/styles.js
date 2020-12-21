import styled from "styled-components";

export const Container = styled.div`
  height: 10vh;
  background-color: rgb(32, 32, 36);
  padding: 0 5%;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  img {
    height: 50px;
    width: 50px;

    @media (max-width: 500px) {
      height: 40px;
      width: 40px;
    }
  }

  h1 {
    font-weight: 300;
    color: #fff;
    margin-left: 20px;
    font-size: 1.5rem;

    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
`;
