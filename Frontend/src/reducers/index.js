import { combineReducers } from 'redux';
import { userApproveReducer, userListReducer, userSignupReducer, userSuspendReducer } from './userReducer';
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

import { viewOrderDetailsReducer, viewOrderReducer } from './orderReducer';
import { cartFetchReducer, cartReducer, updateCartReducer } from './cartReducer';
import { getMyorderReducer } from './myorderReducer';
import { addCompanyReducer, deleteCompanyReducer, getCompanyReducer, updateCompanyReducer } from './companyReducer';
import {
	addCategoryReducer,
	deleteCategoryReducer,
	getCategoryReducer,
	updateCategoryReducer
} from './categoryReducer';

import {
paymentReducer,
dataReducer,
ratingReducer,
maxSaleProductReducer,
monthWiseRevenueReducer
} from './adminDashBoardReducer';


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
	cartStore: cartReducer,
	cartItemsStore: cartFetchReducer,
	updateCartStore: updateCartReducer,

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
	//sellerProfileStore:sellerProfileReducer,

	//order Details
	viewOrderDetailsStore: viewOrderDetailsReducer,

	//My Order
	viewMyOrderStore: getMyorderReducer,

	//payment
	paymentStore:paymentReducer,
	dataStore:dataReducer,
	ratingStore:ratingReducer,
	maxSaleProductStore:maxSaleProductReducer,
	monthWiseRevenueStore:monthWiseRevenueReducer
});

export default reducers;
