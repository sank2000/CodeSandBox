import { combineReducers } from "redux";

import iceReducer from "./iceCreams/iceReducer";
import cakeReducer from "./cakes/CakeReducer";
import userReducer from "./User/UserReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
  user: userReducer
});

export default rootReducer;
