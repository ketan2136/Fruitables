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
    incrementCart: (state, action) => {
      console.log(action);

      let item = state.item.findIndex((v) => v.cid === action.payload);
      console.log(item);
      state.item[item].qty++;

      state.item = state.item;
      state.isLoading = state.false;
      state.error = state.null;
    },
    decrementCart: (state, action) => {
      console.log(action);

      let item = state.item.findIndex((v) => v.cid === action.payload);
      console.log(item);
      state.item[item].qty--;
    },
    removeCart: (state, action) => {
      state.item = state.item.filter((v) => v.cid !== action.payload);
    },
  },
});

export const { addToCart, removeCart, incrementCart, decrementCart } =
  cartSlice.actions;

export default cartSlice.reducer;
