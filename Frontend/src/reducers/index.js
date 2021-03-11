import { combineReducers } from "redux";
import { userSignupReducer } from "./userReducer";

const reducers = combineReducers({ userSignupStore: userSignupReducer });

export default reducers;
