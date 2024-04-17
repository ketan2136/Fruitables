import { type } from "@testing-library/user-event/dist/type"
import { ADD_AUTH, GET_AUTH, LOGOUT_AUTH } from "../Actiontype"


export const getAuth = () => (dispatch) => {
    dispatch({type: GET_AUTH})
} 

export const addAuth = (data) => (dispatch) => {
    dispatch({type: ADD_AUTH , payload: data})
}

export const logoutAuth = (data) => (dispatch) => {
    dispatch({type: LOGOUT_AUTH  , payload: data})
}


