import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

// REDUCERS
import housesReducer from "./Modules/Houses/reducer";

const reducers = combineReducers({
  houses: housesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
