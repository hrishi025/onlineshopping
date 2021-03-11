import { combineReducers } from "redux";
import { userSignupReducer } from "./userReducer";
import { userSigninReducer } from "./userReducer";
const reducers = combineReducers({ userSignupStore: userSignupReducer ,userSigninStore: userSigninReducer });

export default reducers;
