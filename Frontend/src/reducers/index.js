import { combineReducers } from 'redux'
import {
  userApproveReducer,
  userListReducer,
  userSignupReducer,
  userSuspendReducer,
} from './userReducer'
import { userSigninReducer, userProfileReducer } from './userReducer'
import {
  companyFetchReducer,
  getProductReducer,
  productPostReducer,
  productUpdateReducer,
  productDeleteReducer,
  categoryFetchReducer,
  // sellerProfileReducer
} from './productReducer'

import { viewOrderDetailsReducer } from './orderReducer'
import { cartFetchAtLoginReducer, cartFetchReducer, cartReducer, cartRemoveReducer, updateCartReducer } from './cartReducer'
import { getMyorderReducer } from './myorderReducer'
import {
  addCompanyReducer,
  deleteCompanyReducer,
  getCompanyReducer,
  updateCompanyReducer,
} from './companyReducer'
import {
  addCategoryReducer,
  deleteCategoryReducer,
  getCategoryReducer,
  updateCategoryReducer,
} from './categoryReducer'

import {
  paymentReducer,
  dataReducer,
  ratingReducer,
  maxSaleProductReducer,
  monthWiseRevenueReducer,
} from './adminDashBoardReducer'

import { sellerApplyReducer } from './sellerReducer'

const reducers = combineReducers({
  //user stores
  userSignupStore: userSignupReducer,
  userSigninStore: userSigninReducer,
  editProfileStore: userProfileReducer,
  userListStore: userListReducer,
  userApproveStore: userApproveReducer,
  userSuspendStore: userSuspendReducer,

  //product stores
  allProductStore: getProductReducer,
  addProductStore: productPostReducer,
  updateProductStore: productUpdateReducer,
  deleteProductStore: productDeleteReducer,

  //cart stores
  cartStore: cartReducer, // cart add reducer
  cartRemoveStore: cartRemoveReducer, //cart item remove store & reducer
  cartItemsStore: cartFetchReducer,
  updateCartStore: updateCartReducer,
  cartLoginStore: cartFetchAtLoginReducer,

  //category and company store
  categoryFetchStore: categoryFetchReducer,
  companyFetchStore: companyFetchReducer,

  getComponyStore: getCompanyReducer,
  updateComponyStore: updateCompanyReducer,
  deleteComponyStore: deleteCompanyReducer,
  addCompanyStore: addCompanyReducer,

  getCategoryStore: getCategoryReducer,
  updateCategoryStore: updateCategoryReducer,
  deleteCategoryStore: deleteCategoryReducer,
  addCategoryStore: addCategoryReducer,

  //seller
  sellerApplyStore: sellerApplyReducer,
  //sellerProfileStore:sellerProfileReducer,

  //order Details
  viewOrderDetailsStore: viewOrderDetailsReducer,

  //My Order
  viewMyOrderStore: getMyorderReducer,

  //payment
  paymentStore: paymentReducer,
  dataStore: dataReducer,
  ratingStore: ratingReducer,
  maxSaleProductStore: maxSaleProductReducer,
  monthWiseRevenueStore: monthWiseRevenueReducer,
})

export default reducers
