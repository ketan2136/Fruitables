import { type } from "@testing-library/user-event/dist/type"
import { ADD_AUTH, GET_AUTH } from "../Actiontype"


export const getAuth = () => (dispatch) => {
    dispatch({type: GET_AUTH})
} 

export const addAuth = (data) => (dispatch) => {
    dispatch({type: ADD_AUTH , payload: data})
}