import { LOGIN_REQUEST, SIGNUP_REQUEST } from "../Actiontype";

const initialstate = {
  user: null,
  isLoading: false,
  error: null,
};

export const loginReducher = (state = initialstate, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
      };
    case "USER_FETCH_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.message,
      };
    default:
      return state;
  }
};
