import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: all 0.3s;
  text-align: center;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  color: #fff;
  font-size: 1rem;
  border: none;
  background-color: #e74c3c;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #b9382a;
  }

  &:nth-of-type(1) {
    margin-right: 15px;
    background-color: #3498db;

    &:hover {
      background-color: #277db7;
    }
  }
`;
