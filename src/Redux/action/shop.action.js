import { type } from "@testing-library/user-event/dist/type";
import { ADD_SHOP, DELETE_SHOP, EDIT_SHOP, GET_SHOP } from "../Actiontype";
import axios from "axios";

export const getShop = () => async (dispatch) => {
  try {
    await axios
      .get("http://localhost:3001/fruites")
      .then((response) => {
        dispatch({ type: GET_SHOP, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error("Error adding shop:", error);
  }
};

export const addShop = (data) => async (dispatch) => {
  try {
    await axios
      .post("http://localhost:3001/fruites", data)
      .then((response) => {
        dispatch({ type: ADD_SHOP, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error("Error adding shop:", error);
  }
};

export const deleteShop = (id) =>  async(dispatch) => {
    console.log(id);
  try {
    await axios.delete("http://localhost:3001/fruites", id)
      .then((response) => {
        console.log(response);
        dispatch({type: DELETE_SHOP, payload: response.id})
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};



// export const editShop = (data) => async (dispatch) => {
//   console.log(data);
//   try {
//     await axios
//       .put("http://localhost:3001/fruites" + data.id)
//       .then((response) => {
//         dispatch({ type: EDIT_SHOP, payload: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } catch (error) {
//     console.error("Error adding shop:", error);
//   }
// };
