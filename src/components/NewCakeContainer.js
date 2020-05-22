import React, { useState } from "react";
import buyCake from "../Redux/cakes/cakeAction";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    noOfCakes: state.cake.noOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  };
};

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>Number of cakes :{props.noOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCakeContainer);
