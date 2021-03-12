import {
   
   PRODUCT_FETCH_REQUEST ,
   PRODUCT_FETCH_SUCCESS ,
   PRODUCT_FETCH_FAIL, 
   PRODUCT_ADD_REQUEST,
   PRODUCT_ADD_SUCCESS ,
   PRODUCT_ADD_FAIL,
   

 } from "./../constants/productConstants";
 

export const getProductReducer = (state = {}, action) => {
   switch (action.type) {
     case PRODUCT_FETCH_REQUEST:
       return { loading: true };
 
     case PRODUCT_FETCH_SUCCESS:
       return { loading: false, response: action.payload };
 
     case PRODUCT_FETCH_FAIL:
       return { loading: false, error: action.payload };
   
     default:
       return state;
   }
 };
 
export const postProductReducer = (state = {}, action) => {
   switch (action.type) {
     case PRODUCT_ADD_REQUEST:
       return { loading: true };
 
     case PRODUCT_ADD_SUCCESS:
       return { loading: false, response: action.payload };
 
     case PRODUCT_ADD_FAIL:
       return { loading: false, error: action.payload };
   
     default:
       return state;
   }
 };