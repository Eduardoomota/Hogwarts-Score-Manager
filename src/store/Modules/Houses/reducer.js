// ACTIONS
import { ADD_POINT_TO_HOUSE, REMOVE_POINT_TO_HOUSE } from "./actionsType";

import GryffindorImage from "../../../assets/img/Gryffindor.png";
import SlytherinImage from "../../../assets/img/Slytherin.png";
import HufflepuffImage from "../../../assets/img/Hufflepuff.png";
import RavenclawImage from "../../../assets/img/Ravenclaw.png";

const defaultHouse = [
  {
    id: 1,
    name: "Gryffindor",
    image: GryffindorImage,
    points: 0,
  },
  {
    id: 2,
    name: "Slytherin",
    image: SlytherinImage,
    points: 0,
  },
  {
    id: 3,
    name: "Hufflepuff",
    image: HufflepuffImage,
    points: 0,
  },
  {
    id: 4,
    name: "Ravenclaw",
    image: RavenclawImage,
    points: 0,
  },
];

const housesReducer = (state = defaultHouse, action) => {
  switch (action.type) {
    case ADD_POINT_TO_HOUSE:
      return action.houses;
    case REMOVE_POINT_TO_HOUSE:
      return action.houses;
    default:
      return state;
  }
};

export default housesReducer;
