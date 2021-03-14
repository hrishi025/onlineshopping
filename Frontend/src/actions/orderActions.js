import axios from "axios";
import {
    ORDER_FETCH_REQUEST,
    ORDER_FETCH_SUCCESS,
    ORDER_FETCH_FAIL,
    ORDER_FETCH_RESET
  } from "../constants/orderConstants";
 
  
export const getOrders = () => {
    return (dispatch) => {
      dispatch({
        type: ORDER_FETCH_REQUEST,
      });
  
      const url = "http://localhost:4000/myorder";
     
      const header = {
        headers: {
          "Content-Type": "application/json",
        }
      };
  
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: ORDER_FETCH_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: ORDER_FETCH_FAIL,
            payload: error,
          });
        });
    };
  };
  