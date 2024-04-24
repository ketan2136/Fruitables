
import { ADMIN_ADDNEW_LOGIN, ADMIN_ADD_LOGIN, ADMIN_GET_LOGIN, ADMIN_LOGUOT, ADMIN_NEWGET_LOGIN } from "../Actiontype";


// export const adminLoginGet = () => async (dispatch) => {
//   try {
//     await axios
//       .get("http://localhost:3001/users")
//       .then((response) => {
//         dispatch({ type: ADMIN_GET_LOGIN, payload: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };


// export const adminLoginAdd = (data) => async (dispatch) => {
//   try {
//     await axios
//       .post("http://localhost:3001/users",data)
//       .then((response) => {
//         dispatch({ type: ADMIN_ADD_LOGIN, payload: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const adminAddLoginGet = (data) => async (dispatch) => {
//   try {
//    dispatch({type:ADMIN_NEWGET_LOGIN, payload: data})
//   } catch (error) {
//     console.log(error);
//   }
// };
export const adminAddLogin = (data) => async (dispatch) => {
  try {
   dispatch({type:ADMIN_ADDNEW_LOGIN, payload: data})
  } catch (error) {
    console.log(error);
  }
};
export const adminLogout = () => async (dispatch) => {
  try {
    dispatch({type: ADMIN_LOGUOT})
  } catch (error) {
    console.log(error);
  }
};


