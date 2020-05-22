import React from "react";
import buyCake from "../Redux/cakes/cakeAction";
import { useSelector, useDispatch } from "react-redux";

function HooksCakeContainer(props) {
  const noOfCakes = useSelector(state => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes :{noOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
