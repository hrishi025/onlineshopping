import axios from 'axios';
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

export const getPayment = () => {
	return (dispatch) => {
		dispatch({
			type: PAYEMENT_FETCH_REQUEST
		});

		console.log('in get payment');
	
		const url = 'http://localhost:4000/payment/total';

		// const body = {
		// 	prod_id,
		// 	cart_quantity
		// };

		const header = {
			headers: {
				'Content-Type': 'application/json',
				token: sessionStorage['token']
			}
		};

		axios
			.get(url,  header)
			.then((response) => {
				dispatch({
					type: PAYEMENT_FETCH_SUCCESS,
					payload: response.data
				});
			})
			.catch((error) => {
				dispatch({
					type: PAYEMENT_FETCH_FAIL,
					payload: error
				});
			});
	};
};
