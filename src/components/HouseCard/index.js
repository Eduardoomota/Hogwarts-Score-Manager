import { useHistory } from "react-router-dom";

import * as S from "./styles";

const HouseCard = ({ house: { name, id, image, points } }) => {
  const history = useHistory();

  const editHouse = (houseName) => history.push(`/houses/${houseName}`);

  return (
    <S.Card onClick={() => editHouse(name)}>
      <h2>
        #{id} {name}
      </h2>

      <img src={image} alt={`${name} House`} />
      <S.CardDescription>
        <span>{points} Points</span>
      </S.CardDescription>
    </S.Card>
  );
};

export default HouseCard;
