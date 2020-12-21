import { useSelector } from "react-redux";

// COMPONENTS
import HouseCard from "../HouseCard";

// STYLES
import { Container } from "./styles";

const HousesList = () => {
  const houses = useSelector(({ houses }) => houses);

  return (
    <Container>
      <ul>
        {houses.map((house, index) => (
          <HouseCard key={index} house={house} />
        ))}
      </ul>
    </Container>
  );
};
export default HousesList;
