import { ADD_PDF } from "../Actiontype"


export const addpdf = (data) => (dispatch) => {
    dispatch({type: ADD_PDF ,payload: data})
}