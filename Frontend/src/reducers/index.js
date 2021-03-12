import { combineReducers } from "redux";
import { userSignupReducer } from "./userReducer";
import { userSigninReducer ,userProfileReducer} from "./userReducer";
import {
  categoryFetchReducer,
  companyFetchReducer,
  getProductReducer,
  productPostReducer,
} from "./productReducer";
import { cartFetchReducer, cartReducer } from "./cartReducer";

const reducers = combineReducers({
  userSignupStore: userSignupReducer,
  userSigninStore: userSigninReducer,
  allProductStore: getProductReducer,
  addProductStore: productPostReducer,
  cartStore: cartReducer,
  cartItemsStore: cartFetchReducer,
  categoryFetchStore: categoryFetchReducer,
  companyFetchStore: companyFetchReducer,
  editProfileStore : userProfileReducer
});

export default reducers;
