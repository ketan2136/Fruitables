import { combineReducers } from "redux";
import { facilityReducher } from "./facility.reducher";
import { authReducher } from "./auth.reducher";


export const rootReducher = combineReducers ({
    facility: facilityReducher,
    auth: authReducher
})