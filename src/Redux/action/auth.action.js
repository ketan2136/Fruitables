import { ADD_AUTH, GET_AUTH, LOGOUT_AUTH } from "../Actiontype";


export const getAuth = (data) => (dispatch) => {
  dispatch({ type: GET_AUTH , payload: data});
};

// export const addAuth = (data) => (dispatch) => {
//   console.log(data);
//   dispatch({ type: ADD_AUTH, payload: data });
// };

export const logoutAuth = () => (dispatch) => {
  dispatch({ type: LOGOUT_AUTH});
};



