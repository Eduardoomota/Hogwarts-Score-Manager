import { ADD_POINT_TO_HOUSE, REMOVE_POINT_TO_HOUSE } from "./actionsType";
import { defaultHouses } from "../../../utils";

const housesReducer = (state = defaultHouses, action) => {
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
