import { NEWAUTH_ADD, NEWAUTH_GET } from "../Actiontype";

const initialState = {
  isLoadind: false,
  userNew: {},
  error: null,
};

export const newAuthReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case NEWAUTH_GET:
      return {
        ...state,
        userNew: action.payload,
      };
    case NEWAUTH_ADD:
      return {
        ...state,
        userNew: action.payload,
      };
    default:
      return state;
  }
};
