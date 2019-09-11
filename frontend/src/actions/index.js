import axios from 'axios';

export const LOAD_START = 'LOAD_START';
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const SMURF_FAILURE = 'SMURF_FAILURE';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';


export const getSmurfs = () => dispatch => {
  dispatch({ type: LOAD_START });
  axios
    .get('https://home-chore-tracker.herokuapp.com')
    .then(response => {
      console.log('Response:', response);
      dispatch({ type: SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: SMURF_FAILURE, payload: err }));
};

export const addSmurfs = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post(`http://localhost:5000/smurfs`, smurf)
    .then(response => {
      dispatch({ type: SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: SMURF_FAILURE, payload: err }));
};

export const updateSmurfs = (smurf, id) => dispatch => {
  dispatch({ type: UPDATE_SMURF });
  axios
    .put(`http://localhost:5000/smurfs/${id}`, smurf)
    .then(response => {
      dispatch({ type: SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: SMURF_FAILURE, payload: err });
    });
};

export const deleteSmurfs = id => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios
    .delete(`http://localhost:5000/smurfs/${id}`)
    .then(response => {
      dispatch({ type: SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: SMURF_FAILURE, payload: err });
    });
};