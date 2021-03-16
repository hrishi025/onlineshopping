import axios from 'axios'
import { request_url } from '../config/url'
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
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
} from './../constants/productConstants'

export const getProductList = () => {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_FETCH_REQUEST,
    })

    const url = 'http://localhost:4000/seller/product'

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

//Update seller product
export const updateProduct = (
  prod_id,
  prod_title,
  prod_price,
  prod_qty,
  productPhoto
) => {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    })

    const formData = new FormData()

    formData.append('prod_title', prod_title)
    formData.append('prod_id', prod_id)
    formData.append('prod_price', prod_price)
    formData.append('prod_qty', prod_qty)
    formData.append('photo', productPhoto)

    const url = 'http://localhost:4000/product/update'
    console.log(` update product --.>prod_id--->${prod_id} 
                  prod_title--->${prod_title}  prod_price--->${prod_price} 
                  prod_qty--->${prod_qty} prod_qty--->${productPhoto}`)

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    axios
      .post(url, formData, header)
      .then((response) => {
        dispatch({
          type: PRODUCT_UPDATE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PRODUCT_UPDATE_FAIL,
          payload: error,
        })
      })
  }
}

export const getAllCategories = () => {
  return (dispatch) => {
    dispatch({
      type: CATEGORY_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }
  }
}
//     const url = "http://localhost:4000/category/";
//     axios
//       .get(url, header)
//       .then((response) => {
//         dispatch({
//           type: CATEGORY_FETCH_SUCCESS,
//           payload: response.data,
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: CATEGORY_FETCH_FAIL,
//           payload: error,
//         });
//       });
//   };
// };

// export const getAllCompanies = () => {
//   return (dispatch) => {
//     dispatch({
//       type: COMPANY_FETCH_REQUEST,
//     });

//     const header = {
//       headers: {
//         "Content-Type": "application/json",
//         token: sessionStorage["token"],
//       },
//     };

//     const url = "http://localhost:4000/company/";
//     axios
//       .get(url, header)
//       .then((response) => {
//         dispatch({
//           type: COMPANY_FETCH_SUCCESS,
//           payload: response.data,
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: COMPANY_FETCH_FAIL,
//           payload: error,
//         });
//       });
//   };
// };

// export const getProductDetails = (prod_id) => {
//   return (dispatch) => {
//     dispatch({
//       type: PRODUCT_FETCH_REQUEST,
//     });

//     const url = `http://localhost:4000/productdetails/${prod_id}`;
//     console.log(url);
//     const header = {
//       "Content-Type": "application/json",
//       token: sessionStorage["token"],
//     };

//     axios
//       .get(url, header)
//       .then((response) => {
//         dispatch({
//           type: PRODUCT_FETCH_SUCCESS,
//           payload: response.data,
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: PRODUCT_FETCH_FAIL,
//           payload: error,
//         });
//       });
//   };
// };
