import { type } from "@testing-library/user-event/dist/type"
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "../Actiontype"


export const signupRequest = (data) => (dispatch) => {
    dispatch({type: SIGNUP_REQUEST, payload: data})
}
export const loginRequest = (data) => (dispatch) => {
    dispatch({type: LOGIN_REQUEST, payload: data})
}

