import { ADD_FACILITY, DELETE_FACILITY, EDIT_FACILITY, GET_FACILITY } from "../Actiontype";

const initialstate = {
  isLoading: false,
  facility: [],
  error: null,
};

export const facilityReducher = (state = initialstate, action) => {
  console.log(action);

  switch (action.type) {
    case GET_FACILITY:
      return {
        ...state,
        facility: action.payload,
      };
    case ADD_FACILITY:
      return {
        ...state,
        facility: [...state.facility, action.payload],
      };
    case EDIT_FACILITY:
      return {
        ...state,
        facility: state.facility.map((v) => {
            console.log(v);
            if(v.id === action.payload.id) {
                return action.payload;
            } else {
                return v
            }
        })
      };
    case DELETE_FACILITY:
      return {
        ...state,
        facility: state.facility.filter((v) => v.id !== action.payload)
      };
    default:
      return state;
  }
};


