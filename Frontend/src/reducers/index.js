import { combineReducers } from "redux";
import { userDetailsReducer, userSignupReducer } from "./userReducer";
import { userSigninReducer, userProfileReducer } from "./userReducer";
import {
  categoryFetchReducer,
  companyFetchReducer,
  getProductReducer,
  productPostReducer,
} from "./productReducer";
import { cartFetchReducer, cartReducer } from "./cartReducer";

const reducers = combineReducers({
  //user stores
  userSignupStore: userSignupReducer,
  userSigninStore: userSigninReducer,
  editProfileStore: userProfileReducer,

  //product stores
  allProductStore: getProductReducer,
  addProductStore: productPostReducer,

  //cart stores
  cartStore: cartReducer,
  cartItemsStore: cartFetchReducer,

  //category and company store
  categoryFetchStore: categoryFetchReducer,
  companyFetchStore: companyFetchReducer,
});

export default reducers;
