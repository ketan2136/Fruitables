import axios from "axios";
import { ADMIN_ADD_LOGIN, ADMIN_GET_LOGIN } from "../Actiontype";

export const adminLoginGet = () => async (dispatch) => {
  try {
    await axios
      .get("http://localhost:3001/users")
      .then((response) => {
        dispatch({ type: ADMIN_GET_LOGIN, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};


export const adminLoginAdd = (data) => async (dispatch) => {
  try {
    await axios
      .post("http://localhost:3001/users",data)
      .then((response) => {
        dispatch({ type: ADMIN_ADD_LOGIN, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};


