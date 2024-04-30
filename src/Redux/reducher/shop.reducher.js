import { ADD_SHOP, DELETE_SHOP, EDIT_SHOP, GET_SHOP, LOADING_START, LOADING_STOP } from "../Actiontype";

const initailState = {
  isloading: false,
  shop: [],
  error: null,
};

export const shopReducer = (state = initailState, action) => {
console.log(state, action);
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_STOP:
      return {
        ...state,
        isLoading: false,
      };
    case GET_SHOP:
      return {
        isloading: false,
        shop: action.payload,
      };
    case ADD_SHOP:
      return {
        ...state,
        shop: [...state.shop, action.payload],
      };
    case DELETE_SHOP:
      return {
        ...state,
        shop: state.shop.filter((v) => v.id !== action.payload),
      };
    case EDIT_SHOP:
      return {
        ...state,
        isloading: false,
        shop: state.shop.map((v) => {
          if (v.id === action.payload.id) {
            return action.payload;
          } else {
            return v;
          }
        }),
      };
    default:
      return state;
  }
};


