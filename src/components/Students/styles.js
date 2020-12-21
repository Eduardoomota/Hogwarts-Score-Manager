import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 20%;
  margin: 0 auto;
  width: auto;
  position: relative;
  background-color: #000;
  min-height: 90vh;

  @media (max-width: 768px) {
    padding: 70px 5%;
    max-width: 100%;
  }

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    circle {
      color: #fff;
    }
  }

  table {
    width: 100%;
    background-color: rgb(32, 32, 36);
    border-radius: 8px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    padding: 30px;

    @media (max-width: 768px) {
      padding: 15px;
    }
  }

  table th,
  table td {
    color: #fff;
  }

  thead tr {
    height: 70px;
  }

  thead tr th {
    width: 33.3333%;
    font-size: 1.4rem;

    @media (max-width: 400px) {
      font-size: 1.1rem;
    }
  }

  tbody tr th {
    font-weight: 400;
  }

  section > span > span {
    height: 50px;
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: rgb(32, 32, 36);
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgb(61 61 66);
  }
`;
