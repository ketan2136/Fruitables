import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";



const initialState = {
    isLoading: false,
    coupon: [],
    error: null
}


export const addCoupon = createAsyncThunk(
    'coupon/add',
    async (data) => {
        console.log(data);

       const response = await axios.post('http://localhost:3001/coupons', data)
       console.log(response.data)
        // .then((response) => console.log(response))
        // .catch((error) => console.log(error))
    }
)


const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(addCoupon.fulfilled, (state, action) => {

        })
    }
})


export default couponSlice.reducer