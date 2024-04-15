import { ADD_AUTH, DELETE_AUTH, GET_AUTH } from "../Actiontype";

const initialState = {
  isLoading: false,
  user: [],
  error: null,
};

export const authReducher = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_AUTH:
      return {
        ...state,
        user: [...state.user, action.payload.user],
      };
      case DELETE_AUTH:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};


// import { ADD_AUTH, GET_AUTH } from "../Actiontype";

// const initialState = {
//   isLoading: false,
//   user: null,
//   error: null,
// };

// export const authReducer = (state = initialState, action) => {
//   console.log(action);

//   switch (action.type) {
//     case GET_AUTH:
//       return {
//         ...state,
//         user: action.payload,
//       };
//     case ADD_AUTH:
//       return {
//         ...state,
//         user: state.user ? [...state.user, action.payload] : [action.payload],
//       };
//     default:
//       return state;
//   }
// };
