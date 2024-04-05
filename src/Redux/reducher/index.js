import { combineReducers } from "redux";
import { facilityReducher } from "./facility.reducher";


export const rootReducher = combineReducers ({
    facility: facilityReducher,
})