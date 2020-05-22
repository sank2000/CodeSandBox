import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchUser from "../Redux/User/userAction";

function UserComponent({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <>
      <h2>User List </h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user => <p>{user.name}</p>)}
      </div>
    </>
  );
}

const mapStateToprops = state => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUser())
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(UserComponent);
