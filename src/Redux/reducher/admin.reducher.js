import { ADMIN_ADDNEW_LOGIN, ADMIN_ADD_LOGIN, ADMIN_GET_LOGIN, ADMIN_LOGUOT, ADMIN_NEWGET_LOGIN } from "../Actiontype";

const initialState = {
  isLoading: false,
  users: [],
  error: null,
};

export const adminLoginReducher = (state = initialState, action) => {
  console.log('admin',action);

  switch (action.type) {
    // case ADMIN_NEWGET_LOGIN:
    //   return {
    //     ...state,
    //     users: action.payload,
    //   };
    // case ADMIN_ADD_LOGIN:
    //   return {
    //     ...state,
    //     users: [...state.users, action.payload],
    //   };
    // case ADMIN_NEWGET_LOGIN:
    //   return {
    //     ...state,
    //     users: action.payload,
    //   };
    case ADMIN_ADDNEW_LOGIN:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case ADMIN_LOGUOT:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};


