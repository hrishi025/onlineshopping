import {
 PAYEMENT_FETCH_REQUEST,
 PAYEMENT_FETCH_SUCCESS,
 PAYEMENT_FETCH_FAIL,
 PAYEMENT_FETCH_RESET,
 DATA_FETCH_REQUEST,
 DATA_FETCH_SUCCESS,
 DATA_FETCH_FAIL,
 DATA_FETCH_RESET, 
} from '../constants/adminDashBoardConstant';

export const paymentReducer = (state = {}, action) => {
	switch (action.type) {
		case PAYEMENT_FETCH_REQUEST:
			return { loading: true };

		case PAYEMENT_FETCH_SUCCESS:
			return { loading: false, response: action.payload };

		case PAYEMENT_FETCH_FAIL:
			return { loading: false, error: action.payload };

		case PAYEMENT_FETCH_RESET:
			return {};

		default:
			return state;
	}
};


export const dataReducer = (state = {}, action) => {
	switch (action.type) {
		case DATA_FETCH_REQUEST:
			return { loading: true };

		case DATA_FETCH_SUCCESS:
			return { loading: false, response: action.payload };

		case DATA_FETCH_FAIL:
			return { loading: false, error: action.payload };

		case DATA_FETCH_RESET:
			return {};

		default:
			return state;
	}
};
