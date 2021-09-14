import { useSelector } from "react-redux";

import HouseCard from "../HouseCard";

import * as S from "./styles";

const HousesList = () => {
  const houses = useSelector(({ houses }) => houses);

  return (
    <S.Container>
      <ul>
        {houses.map((house, index) => (
          <HouseCard key={index} house={house} />
        ))}
      </ul>
    </S.Container>
  );
};
export default HousesList;
