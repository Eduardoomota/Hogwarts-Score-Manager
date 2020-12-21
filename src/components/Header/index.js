// IMAGES
import Brand from "../../assets/img/brand.svg";

// STYLES
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <img src={Brand} alt="Hogwarts" />
      <h1>Hogwarts Score Manager</h1>
    </Container>
  );
};

export default Header;
