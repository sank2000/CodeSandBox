import { combineReducers } from "redux";

import iceReducer from "./iceCreams/iceReducer";
import cakeReducer from "./cakes/CakeReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer
});

export default rootReducer;
