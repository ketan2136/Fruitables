import { type } from "@testing-library/user-event/dist/type"
import { ADD_REVIEW } from "../Actiontype"

export const addReview = (data) => (dispatch) => {
    dispatch({type: ADD_REVIEW , payload: data})
} 