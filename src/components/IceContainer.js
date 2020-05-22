import React from "react";
import buyIce from "../Redux/iceCreams/iceAction";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    noOfIce: state.ice.noOfIce
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIce: () => dispatch(buyIce())
  };
};

function IceContainer(props) {
  return (
    <div>
      <h2>Number of Ice :{props.noOfIce}</h2>
      <button onClick={props.buyIce}>Buy Cake</button>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceContainer);
