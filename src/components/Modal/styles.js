import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Card = styled.div`
  width: 400px;
  height: 500px;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 90%;
    height: 450px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  height: 13%;
  padding: 0 30px;
  justify-content: space-between;
  background-color: rgb(32, 32, 36);

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 25px;
      height: 25px;
      fill: #fff;
      transition: all 0.3s;

      path {
        stroke: #fff;
      }
    }

    &:hover {
      svg {
        transform: rotate(90deg);
      }
    }
  }
`;

export const CardImage = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
  object-position: center 20%;
`;

export const CardDescription = styled.div`
  height: 37%;
  background-color: rgb(32, 32, 36);
  padding: 15px 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
`;
