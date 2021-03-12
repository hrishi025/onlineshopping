import axios from 'axios'
import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_FAIL,
} from './../constants/productConstants'

export const getProductList = () => {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_FETCH_REQUEST,
    })

    const url = 'http://localhost:4000/product'

    const header = {
      'Content-Type': 'application/json',
    }

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: PRODUCT_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PRODUCT_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const addProductList = (prod_title,
  prod_description,
  cat_id,
  prod_price,
  comp_id,
  prod_qty,) => {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_ADD_REQUEST,
    })

    const url = 'http://localhost:4000/product'

    const body = {
      prod_title,
      prod_description,
      cat_id,
      prod_price,
      comp_id,
      prod_qty,
    }
    const header = {
      'Content-Type': 'application/json',
    }

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: PRODUCT_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PRODUCT_ADD_FAIL,
          payload: error,
        })
      })
  }
}
