import {
	ORDER_FETCH_REQUEST,
	ORDER_FETCH_SUCCESS,
	ORDER_FETCH_FAIL,
	ORDER_FETCH_RESET
} from '../constants/orderConstants';

export const viewOrderReducer = (state = {}, action) => {
	switch (action.type) {
		case ORDER_FETCH_REQUEST:
			return { loading: true };

		case ORDER_FETCH_SUCCESS:
			return { loading: false, response: action.payload };

		case ORDER_FETCH_FAIL:
			return { loading: false, error: action.payload };

		case ORDER_FETCH_RESET:
			return {};

		default:
			return state;
	}
};
