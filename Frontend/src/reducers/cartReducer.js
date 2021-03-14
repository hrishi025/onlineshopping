import {
	CART_ADD_FAIL,
	CART_ADD_REQUEST,
	CART_ADD_RESET,
	CART_ADD_SUCCESS,
	CART_FETCH_FAIL,
	CART_FETCH_REQUEST,
	CART_FETCH_RESET,
	CART_FETCH_SUCCESS,
	CART_UPDATE_REQUEST,
	CART_UPDATE_SUCCESS,
	CART_UPDATE_FAIL,
	CART_UPDATE_RESET
} from '../constants/cartConstants';

export const cartReducer = (state = {}, action) => {
	switch (action.type) {
		case CART_ADD_REQUEST:
			return { loading: true };

		case CART_ADD_SUCCESS:
			return { loading: false, response: action.payload };

		case CART_ADD_FAIL:
			return { loading: false, error: action.payload };

		case CART_ADD_RESET:
			return {};

		default:
			return state;
	}
};

export const cartFetchReducer = (state = {}, action) => {
	switch (action.type) {
		case CART_FETCH_REQUEST:
			return { loading: true };

		case CART_FETCH_SUCCESS:
			return { loading: false, response: action.payload };

		case CART_FETCH_FAIL:
			return { loading: false, error: action.payload };

		case CART_FETCH_RESET:
			return {};

		default:
			return state;
	}
};

export const updateCartReducer = (state = {}, action) => {
	switch (action.type) {
		case CART_UPDATE_REQUEST:
			return { loading: true };

		case CART_UPDATE_SUCCESS:
			return { loading: false, response: action.payload };

		case CART_UPDATE_FAIL:
			return { loading: false, error: action.payload };

		case CART_UPDATE_RESET:
			return {};

		default:
			return state;
	}
};
