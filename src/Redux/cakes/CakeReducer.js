import { BUY_CAKE } from "./actions";

const initialState = {
  noOfCakes: 10
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.payload
      };

    default:
      return state;
  }
};

export default reducer;
