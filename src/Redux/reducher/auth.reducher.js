import { ADD_AUTH, DELETE_AUTH, GET_AUTH, LOGOUT_AUTH } from "../Actiontype";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

export const authReducher = (state = initialState, action) => {
  console.log('auth', action);
  switch (action.type) {
    case GET_AUTH:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_AUTH:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
      };
      case LOGOUT_AUTH:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

