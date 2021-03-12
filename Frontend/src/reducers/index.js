import { combineReducers } from "redux";
import { userSignupReducer } from "./userReducer";
import { userSigninReducer } from "./userReducer";
import { getProductReducer } from "./productReducer";
import { postProductReducer } from "./productReducer";

const reducers = combineReducers({ userSignupStore: userSignupReducer ,userSigninStore: userSigninReducer,allProductStore: getProductReducer,addProductStore:postProductReducer });

export default reducers;
