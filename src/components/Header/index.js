import Brand from "../../assets/img/brand.svg";

import * as S from "./styles";

const Header = () => (
  <S.Container>
    <img src={Brand} alt="Hogwarts" />
    <h1>Hogwarts Score Manager</h1>
  </S.Container>
);

export default Header;
