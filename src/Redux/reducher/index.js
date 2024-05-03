import { combineReducers } from "redux";
import { facilityReducher } from "./facility.reducher";
// import { authReducher } from "./auth.reducher";
import { shopReducer } from "./shop.reducher";
import cartSlice from "../slice/cartSlice";
import { authReducher } from "./auth.reducher";
import { adminLoginReducher } from "./admin.reducher";
import { newAuthReducer } from "./new.reducer";
import couponSlice from "../slice/couponSlice";
import { reviewReducer } from "./review.reducer";


export const rootReducher = combineReducers ({
    facility: facilityReducher,
    auth: authReducher,
    shop: shopReducer,
    cart: cartSlice,
    users: adminLoginReducher,
    userNew: newAuthReducer,
    coupon: couponSlice,
    review: reviewReducer,

})