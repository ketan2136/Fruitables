import { ADD_AUTH, ADMIN_LOGIN, DELETE_AUTH, GET_AUTH, LOGOUT_AUTH } from "../Actiontype";

const initialState = {
  isLoading: false,
  user: {},
  error: null,
};

export const authReducher = (state = initialState, action) => {

  switch (action.type) {
    case GET_AUTH:
      return {
        ...state,
        user: action.payload
      };
    // case ADD_AUTH:
    //   return {
    //     ...state,
    //     user: action.payload,
    //     isLoading: false,
    //     error: null,
    //   };
      case LOGOUT_AUTH:
      return {
        ...state,
        user: {},
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

