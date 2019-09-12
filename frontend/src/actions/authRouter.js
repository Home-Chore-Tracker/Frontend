import axios from "axios";

export const LOAD = "LOAD";
export const REGISTER = "REGISTER";
export const LOG_IN = "LOG_OUT";
export const LOG_OUT = "LOG_IN";
export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";

export const initial = () => dispatch => {
  dispatch({ type: LOAD });
  axios
    .get("https://home-chore-tracker.herokuapp.com")
    .then(response => {
      console.log("Response:", response);
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};

export const logIn = () => dispatch => {
  dispatch({ type: LOG_IN });
  axios
    .post("https://home-chore-tracker.herokuapp.com/auth/login")
    .then(response => {
      console.log("Response:", response);
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};

export const register = () => dispatch => {
  dispatch({ type: REGISTER });
  axios
    .post("https://home-chore-tracker.herokuapp.com/auth/register")
    .then(response => {
      console.log("Response:", response);
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};

export const logOut = () => dispatch => {
  dispatch({ type: LOG_OUT });
  axios
    .post("https://home-chore-tracker.herokuapp.com/auth/logout")
    .then(response => {
      console.log("Response:", response);
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};
