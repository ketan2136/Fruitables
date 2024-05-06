import { ADD_REVIEW, GET_REVIEW } from "../Actiontype";

const initialState = {
  isLoading: false,
  review: [],
  error: null,
};

export const reviewReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_REVIEW:
      return {
        ...state,
        review:  action.payload
      };
    case ADD_REVIEW:
      return {
        ...state,
        review: [...state.review, action.payload],
      };
    default:
      return state;
  }
};


