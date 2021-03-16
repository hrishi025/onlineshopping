import axios from 'axios'
import {
  ORDERDETAILS_FETCH_REQUEST,
  ORDERDETAILS_FETCH_SUCCESS,
  ORDERDETAILS_FETCH_FAIL,
} from '../constants/orderConstants'

export const viewOrderDetails = (myorder_id) => {
  return (dispatch) => {
    dispatch({
      type: ORDERDETAILS_FETCH_REQUEST,
    })

    const url = `http://localhost:4000/orderdetails/${myorder_id}`

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: ORDERDETAILS_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: ORDERDETAILS_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

// View All Order Details to Admin
export const viewOrderDetailsAdmin = () => {
  return (dispatch) => {
    dispatch({
      type: ORDERDETAILS_FETCH_REQUEST,
    })

    const url = 'http://localhost:4000/orderdetails'

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: ORDERDETAILS_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: ORDERDETAILS_FETCH_FAIL,
          payload: error,
        })
      })
  }
}
