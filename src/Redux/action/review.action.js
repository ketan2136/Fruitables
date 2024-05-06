import { type } from "@testing-library/user-event/dist/type"
import { ADD_REVIEW, GET_REVIEW } from "../Actiontype"

export const getReview = () => (dispatch) => {
    dispatch({type: GET_REVIEW })
} 

export const addReview = (data) => (dispatch) => {
    dispatch({type: ADD_REVIEW , payload: data})
} 

