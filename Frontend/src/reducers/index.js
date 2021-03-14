import { combineReducers } from 'redux';
import { userSignupReducer } from './userReducer';
import { userSigninReducer, userProfileReducer } from './userReducer';
import {
	categoryFetchReducer,
	companyFetchReducer,
	getProductReducer,
	productPostReducer,
	productUpdateReducer,
	productDeleteReducer
	// sellerProfileReducer
} from './productReducer';

import { viewOrderReducer } from './orderReducer';
import { cartFetchReducer, cartReducer } from './cartReducer';

const reducers = combineReducers({
	//user stores
	userSignupStore: userSignupReducer,
	userSigninStore: userSigninReducer,
	editProfileStore: userProfileReducer,

	//product stores
	allProductStore: getProductReducer,
	addProductStore: productPostReducer,
	updateProductStore: productUpdateReducer,
	deleteProductStore: productDeleteReducer,

	//cart stores
	cartStore: cartReducer,
	cartItemsStore: cartFetchReducer,

	//category and company store
	categoryFetchStore: categoryFetchReducer,
	companyFetchStore: companyFetchReducer,

	//seller
	//sellerProfileStore:sellerProfileReducer,

	//order
	viewOrderStore: viewOrderReducer
});

export default reducers;
