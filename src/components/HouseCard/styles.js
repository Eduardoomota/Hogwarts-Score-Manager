import styled from "styled-components";

export const Card = styled.li`
  height: 400px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(32, 32, 36);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: all 0.3s;
  cursor: pointer;
  margin-bottom: 30px;

  @media (max-width: 1400px) {
    margin-bottom: 105px;
    width: 45%;
  }

  @media (max-width: 992px) {
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 60%;
    object-fit: contain;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
    cursor: pointer;
  }

  h2,
  span {
    color: #fff;
    font-weight: 400;
  }
`;

export const CardDescription = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    font-size: 1.3rem;
  }
`;
