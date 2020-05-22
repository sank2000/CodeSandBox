import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS
} from "./UserTypes";
import axios from "axios";

export const fetchdate = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};
export const fetchFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

export default function fetchUser() {
  return dispatch => {
    dispatch(fetchdate());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const user = response.data;
        dispatch(fetchSuccess(user));
      })
      .catch(error => {
        const err = error.message;
        dispatch(fetchFailure(err));
      });
  };
}
