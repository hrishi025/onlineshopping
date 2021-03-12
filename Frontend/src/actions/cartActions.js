import axios from "axios";
import {
  CART_FETCH_REQUEST,
  CART_FETCH_SUCCESS,
  CART_FETCH_FAIL,
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_ADD_FAIL,
} from "./../constants/cartConstants";

export const addToCart = (prod_id, cart_quantity) => {
  return (dispatch) => {
    dispatch({
      type: CART_ADD_REQUEST,
    });

    console.log("in add to cart");
    console.log(prod_id + " token: " + sessionStorage["token"]);

    const url = "http://localhost:4000/company";

    const body = {
      prod_id,
      cart_quantity,
    };

    const header = {
      "Content-Type": "application/json",
      token: sessionStorage["token"],
    };

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CART_ADD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CART_ADD_FAIL,
          payload: error,
        });
      });
  };
};

export const getAllCartItems = () => {
  return (dispatch) => {
    dispatch({
      type: CART_FETCH_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage["token"],
      },
    };

    const url = "http://localhost:4000/cart/";
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: CART_FETCH_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CART_FETCH_FAIL,
          payload: error,
        });
      });
  };
};

export const removeFromCart = (p = {}) => {
  return {
    type: "remove-from-cart",
    payload: p,
  };
};
