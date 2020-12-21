import styled from "styled-components";

export const TableList = styled.tbody`
  tr {
    text-align: center;
    height: 50px;
  }

  @media (max-width: 400px) {
    tr,
    th {
      font-size: 0.9rem;
    }
  }

  button {
    background-color: #fff;
    border: none;
    padding: 8px;
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border-radius: 4px;
    transition: all 0.3s;
    cursor: pointer;
    color: #333;

    @media (max-width: 768px) {
      width: 80%;
    }

    @media (max-width: 400px) {
      font-size: 0.9rem;
    }

    &:hover {
      background-color: #ccc;
    }
  }

  svg {
    margin-right: 10px;
  }
`;
