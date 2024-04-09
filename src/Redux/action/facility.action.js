import { ADD_FACILITY, DELETE_FACILITY, EDIT_FACILITY, GET_FACILITY } from "../Actiontype"

export const getFacility = () => (dispatch) => {
  dispatch({type: GET_FACILITY})
}

export const addfacility = (data) => (dispatch) => {
    dispatch({type: ADD_FACILITY, payload: data})
}
export const editFacility = (data) => (dispatch) => {
    dispatch({type: EDIT_FACILITY, payload: data})
}

export const deleteFacility = (id) => (dispatch) => {
    dispatch({type:DELETE_FACILITY, payload: id})
}