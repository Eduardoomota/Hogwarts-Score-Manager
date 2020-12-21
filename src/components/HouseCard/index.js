import { useHistory } from "react-router-dom";

// STYLES
import { Card, CardDescription } from "./styles";

const HouseCard = ({ house }) => {
  const history = useHistory();

  const editHouse = (houseName) => {
    history.push(`/houses/${houseName}`);
  };

  return (
    <Card onClick={() => editHouse(house.name)}>
      <h2>
        #{house.id} {house.name}
      </h2>

      <img src={house.image} alt={`${house.name} House`} />
      <CardDescription>
        <span>{house.points} Points</span>
      </CardDescription>
    </Card>
  );
};

export default HouseCard;
