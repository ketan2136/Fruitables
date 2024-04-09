import { ADD_SHOP, GET_SHOP } from "../Actiontype";

const initailState = {
  isloading: false,
  shop: [],
  error: null,
};

export const shopReducer = (state = initailState, action) => {

  switch (action.type) {
    case GET_SHOP:
      return {
        isloading: false,
        shop: action.payload,
        error: null,
      };
    // case ADD_SHOP:
    //   return {
    //     ...state,
    //     shop: [...state.shop, action.payload],
    //   };
    default:
      return state;
  }
};


