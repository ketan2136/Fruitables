import { combineReducers } from "redux";
import { facilityReducher } from "./facility.reducher";
// import { authReducher } from "./auth.reducher";
import { shopReducer } from "./shop.reducher";
import cartSlice from "../slice/cartSlice";
import { authReducher } from "./auth.reducher";
import { adminLoginReducher } from "./admin.reducher";


export const rootReducher = combineReducers ({
    facility: facilityReducher,
    auth: authReducher,
    shop: shopReducer,
    cart: cartSlice,
    users: adminLoginReducher,
})