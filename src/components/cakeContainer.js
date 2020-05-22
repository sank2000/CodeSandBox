import React from "react";
import buyCake from "../Redux/cakes/cakeAction";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    noOfCakes: state.noOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

function cakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes :{props.noOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cakeContainer);
