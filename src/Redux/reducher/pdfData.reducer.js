import { ADD_PDF } from "../Actiontype";

const initialstate = {
  data: [],
  isLoading: false,
  error: null,
};

export const pdfReducer = (state = initialstate, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_PDF:
      return {
        ...state,
        data: [action.payload],
      };
    default:
      return state;
  }
};
