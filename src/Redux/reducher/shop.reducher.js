import { ADD_SHOP, DELETE_SHOP, EDIT_SHOP, GET_SHOP } from "../Actiontype";

const initailState = {
  isloading: false,
  shop: [],
  error: null,
};

export const shopReducer = (state = initailState, action) => {

  switch (action.type) {
    case GET_SHOP:
      return {
        ...state,
        isloading: false,
        shop: action.payload,
      };
    case ADD_SHOP:
      return {
        ...state,
        shop: state.shop.concat(action.payload),
      };
    case DELETE_SHOP:
      return {
        ...state,
        shop: state.shop.filter((v) => v.id !== action.payload),
      };
    // case EDIT_SHOP:
    //   return {
    //     ...state,
    //     isloading: false,
    //     shop: state.shop.map((v) => {
    //       if (v.id === action.payload.id) {
    //         return action.payload;
    //       } else {
    //         return v;
    //       }
    //     }),
    //   };
    default:
      return state;
  }
};
