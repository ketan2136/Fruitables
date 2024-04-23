import { NEWAUTH_ADD, NEWAUTH_GET } from "../Actiontype"

export const getAuthNew = () => (dispatch) => {
    dispatch({type: NEWAUTH_GET})
}
export const addAuthNew = (data) => (dispatch) => {
    dispatch({type: NEWAUTH_ADD , payload: data})
}

