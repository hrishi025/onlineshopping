import { combineReducers } from 'redux'
import { userSignupReducer } from './userReducer'
import { userSigninReducer } from './userReducer'
import { getProductReducer } from './productReducer'
import { postProductReducer } from './productReducer'
import cartReducer from './cartReducer'

const reducers = combineReducers({
  userSignupStore: userSignupReducer,
  userSigninStore: userSigninReducer,
  allProductStore: getProductReducer,
  addProductStore: postProductReducer,
  cart: cartReducer,
})

export default reducers
