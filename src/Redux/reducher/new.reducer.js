import { ADMIN_GET_LOGIN} from "../Actiontype";

const initialState = {
  isLoadind: false,
  userNew: {},
  error: null,
};

export const newAuthReducer = (state = initialState, action) => {
  console.log('new',action);

  switch (action.type) {
    case ADMIN_GET_LOGIN:
      return {
        ...state,
        userNew: action.payload,
      };
    // case NEWAUTH_ADD:
    //   return {
    //     ...state,
    //     userNew: action.payload,
    //   };
    default:
      return state;
  }
};
