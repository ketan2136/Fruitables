import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  item: [],
  error: null,
};

export const cartSlice = createSlice({
  name: "addToCart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action);
      let item = state.item.some((v) => v.cid === action.payload.cid);
    
      if (item) {
        let index = state.item.findIndex((v) => v.cid === action.payload.cid);
        state.item[index].qty++;
        // item.qty++
      } else {
        state.item.push(action.payload);
      }

      state.item = state.item;
      state.isLoading = state.false;
      state.error = state.null;
    },
    removeCart: (state, action) => {
        state.item = state.item.filter((v) => v.cid !== action.payload)
    }
  },
});

export const { addToCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
