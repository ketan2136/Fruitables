

import { ADD_SHOP, GET_SHOP } from "../Actiontype"
import axios from 'axios';

export const getShop = () => async(dispatch) => {

    try {
        await axios.get('http://localhost:3001/fruites')
        .then((response) => {
            dispatch({type: GET_SHOP, payload:response.data})
        }).catch((error) => {
           console.log(error);
        })
   } catch (error) {
       console.error('Error adding shop:', error);
   }

}
 // Assuming ActionTypes is imported from another file

export const addShop = (data) => async(dispatch) => {
    console.log(data);
    try {
         await axios.post('http://localhost:3001/fruites',data)
         .then((response) => {
            dispatch({ type: ADD_SHOP, payload: response.data });
         }).catch((error) => {
            console.log(error);
         })

    } catch (error) {
        console.error('Error adding shop:', error);
    }
}

