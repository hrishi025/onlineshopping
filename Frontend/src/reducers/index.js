import { combineReducers } from "redux";
import { userSignupReducer } from "./userReducer";
import { userSigninReducer } from "./userReducer";
import {
  categoryFetchReducer,
  companyFetchReducer,
  getProductReducer,
  productPostReducer,
} from "./productReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  userSignupStore: userSignupReducer,
  userSigninStore: userSigninReducer,
  allProductStore: getProductReducer,
  addProductStore: productPostReducer,
  cart: cartReducer,
  categoryFetchStore: categoryFetchReducer,
  companyFetchStore: companyFetchReducer,
});

export default reducers;
