import axios from "axios";
import { ADMIN_GET_LOGIN } from "../Actiontype"

// export const getAuthNew = () => (dispatch) => {
//     dispatch({type: NEWAUTH_GET})
// }
// export const addAuthNew = (data) => (dispatch) => {
//     dispatch({type: NEWAUTH_ADD , payload: data})
// }

export const getAuthNew = () => async (dispatch) => {
    try {
      await axios
        .get("http://localhost:3001/users")
        .then((response) => {
          console.log(response);
          dispatch({ type: ADMIN_GET_LOGIN, payload: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  