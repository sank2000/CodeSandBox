import { BUY_ICE } from "./types";

const initialState = {
  noOfIce: 20
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        noOfIce: state.noOfIce - 1
      };
    default:
      return state;
  }
}

export default reducer;
