import { ADD_SHOP, GET_SHOP } from "../Actiontype";

const initailState = {
  isloading: false,
  shop: [],
  error: null,
};

export const shopReducer = (state = initailState, action) => {
  console.log(action);
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
    default:
      return state;
  }
};


