import axios from 'axios';
import { request_url } from '../config/url';
import {
	CATEGORY_FETCH_FAIL,
	CATEGORY_FETCH_REQUEST,
	CATEGORY_FETCH_SUCCESS,
	COMPANY_FETCH_FAIL,
	COMPANY_FETCH_REQUEST,
	COMPANY_FETCH_SUCCESS,
	PRODUCT_FETCH_REQUEST,
	PRODUCT_FETCH_SUCCESS,
	PRODUCT_FETCH_FAIL,
	PRODUCT_POST_REQUEST,
	PRODUCT_POST_FAIL,
	PRODUCT_POST_SUCCESS,
	PRODUCT_DELETE_FAIL,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_RESET,
	PRODUCT_DELETE_SUCCESS
} from './../constants/productConstants';

export const getProductList = () => {
	return (dispatch) => {
		dispatch({
			type: PRODUCT_FETCH_REQUEST
		});

		const url = 'http://localhost:4000/product';

		const header = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		axios
			.get(url, header)
			.then((response) => {
				dispatch({
					type: PRODUCT_FETCH_SUCCESS,
					payload: response.data
				});
			})
			.catch((error) => {
				dispatch({
					type: PRODUCT_FETCH_FAIL,
					payload: error
				});
			});
	};
};

export const addProduct = (prod_title, prod_description, cat_id, prod_price, comp_id, prod_qty) => {
	return (dispatch) => {
		dispatch({
			type: PRODUCT_POST_REQUEST
		});

		const url = `http://localhost:4000/product`;

		const body = {
			prod_title,
			prod_description,
			cat_id,
			prod_price,
			comp_id,
			prod_qty
		};
		const header = {
			headers: {
				'Content-Type': 'application/json',
				token: sessionStorage['token']
			}
		};

		axios
			.post(url, body, header)
			.then((response) => {
				dispatch({
					type: PRODUCT_POST_SUCCESS,
					payload: response.data
				});
			})
			.catch((error) => {
				dispatch({
					type: PRODUCT_POST_FAIL,
					payload: error
				});
			});
	};
};

export const getAllCategories = () => {
	return (dispatch) => {
		dispatch({
			type: CATEGORY_FETCH_REQUEST
		});

		const header = {
			headers: {
				'Content-Type': 'application/json',
				token: sessionStorage['token']
			}
		};

		const url = 'http://localhost:4000/category/';
		axios
			.get(url, header)
			.then((response) => {
				dispatch({
					type: CATEGORY_FETCH_SUCCESS,
					payload: response.data
				});
			})
			.catch((error) => {
				dispatch({
					type: CATEGORY_FETCH_FAIL,
					payload: error
				});
			});
	};
};

export const getAllCompanies = () => {
	return (dispatch) => {
		dispatch({
			type: COMPANY_FETCH_REQUEST
		});

		const header = {
			headers: {
				'Content-Type': 'application/json',
				token: sessionStorage['token']
			}
		};

		const url = 'http://localhost:4000/company/';
		axios
			.get(url, header)
			.then((response) => {
				dispatch({
					type: COMPANY_FETCH_SUCCESS,
					payload: response.data
				});
			})
			.catch((error) => {
				dispatch({
					type: COMPANY_FETCH_FAIL,
					payload: error
				});
			});
	};
};

export const getProductDetails = (prod_id) => {
	return (dispatch) => {
		dispatch({
			type: PRODUCT_FETCH_REQUEST
		});

		const url = `http://localhost:4000/productdetails/${prod_id}`;
		console.log(url);
		const header = {
			headers: {
				'Content-Type': 'application/json',
				token: sessionStorage['token']
			}
		};

		axios
			.get(url, header)
			.then((response) => {
				dispatch({
					type: PRODUCT_FETCH_SUCCESS,
					payload: response.data
				});
			})
			.catch((error) => {
				dispatch({
					type: PRODUCT_FETCH_FAIL,
					payload: error
				});
			});
	};
};

//delete seller product
export const deleteProduct = (prod_id) => {
	return (dispatch) => {
		dispatch({
			type: PRODUCT_DELETE_REQUEST
		});

		const url = `http://localhost:4000/product/${prod_id}`;
		console.log(url);
		const header = {
			headers: {
				'Content-Type': 'application/json',
				token: sessionStorage['token']
			}
		};

		axios
			.delete(url, header)
			.then((response) => {
				dispatch({
					type: PRODUCT_DELETE_SUCCESS,
					payload: response.data
				});
			})
			.catch((error) => {
				dispatch({
					type: PRODUCT_DELETE_FAIL,
					payload: error
				});
			});
	};
};
