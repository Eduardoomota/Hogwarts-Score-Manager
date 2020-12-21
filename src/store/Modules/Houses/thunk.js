import { addPointToHouse, removePointToHouse } from "./actions";

export const addPointToHouseThunk = (value, houseName) => (
  dispatch,
  getState
) => {
  const { houses } = getState();
  const findHouse = houses.find((house) => house.name === houseName);
  findHouse["points"] += parseInt(value);
  const updateHouses = houses.map((house) => house);

  dispatch(addPointToHouse(updateHouses));
};

export const removePointToHouseThunk = (value, houseName) => (
  dispatch,
  getState
) => {
  const { houses } = getState();
  const findHouse = houses.find((house) => house.name === houseName);
  findHouse["points"] -= parseInt(value);
  const updateHouses = houses.map((house) => house);

  dispatch(removePointToHouse(updateHouses));
};
