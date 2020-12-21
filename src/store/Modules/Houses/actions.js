import { ADD_POINT_TO_HOUSE, REMOVE_POINT_TO_HOUSE } from "./actionsType";

export const addPointToHouse = (houses) => ({
  type: ADD_POINT_TO_HOUSE,
  houses,
});

export const removePointToHouse = (houses) => ({
  type: REMOVE_POINT_TO_HOUSE,
  houses,
});
