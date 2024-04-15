import { combineReducers } from "redux";
import { facilityReducher } from "./facility.reducher";
import { authReducher } from "./auth.reducher";
import { shopReducer } from "./shop.reducher";
import cartSlice from "../slice/cartSlice";


export const rootReducher = combineReducers ({
    facility: facilityReducher,
    auth: authReducher,
    shop: shopReducer,
    cart: cartSlice
})