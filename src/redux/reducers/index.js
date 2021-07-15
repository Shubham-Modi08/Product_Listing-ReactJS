import { combineReducers } from "redux";
import { prouctReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: prouctReducer,
})