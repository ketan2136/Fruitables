import { ADMIN_ADD_LOGIN, ADMIN_GET_LOGIN } from "../Actiontype";

const initialState = {
  isLoading: false,
  users: [],
  error: null,
};

export const adminLoginReducher = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case ADMIN_GET_LOGIN:
      return {
        ...state,
        users: action.payload,
      };
    case ADMIN_ADD_LOGIN:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};


