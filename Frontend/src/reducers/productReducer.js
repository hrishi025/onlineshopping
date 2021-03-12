import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
  CATEGORY_FETCH_REQUEST,
  CATEGORY_FETCH_SUCCESS,
  CATEGORY_FETCH_FAIL,
  CATEGORY_FETCH_RESET,
  COMPANY_FETCH_REQUEST,
  COMPANY_FETCH_FAIL,
  COMPANY_FETCH_RESET,
  COMPANY_FETCH_SUCCESS,
  PRODUCT_POST_REQUEST,
  PRODUCT_POST_SUCCESS,
  PRODUCT_POST_FAIL,
  PRODUCT_POST_RESET,
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

export const productPostReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_POST_REQUEST:
      return { loading: true };

    case PRODUCT_POST_SUCCESS:
      return { loading: false, response: action.payload };

    case PRODUCT_POST_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_POST_RESET:
      return {};

    default:
      return state;
  }
};

export const companyFetchReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPANY_FETCH_REQUEST:
      return { loading: true };

    case COMPANY_FETCH_SUCCESS:
      return { loading: false, response: action.payload };

    case COMPANY_FETCH_FAIL:
      return { loading: false, error: action.payload };

    case COMPANY_FETCH_RESET:
      return {};

    default:
      return state;
  }
};

export const categoryFetchReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_FETCH_REQUEST:
      return { loading: true };

    case CATEGORY_FETCH_SUCCESS:
      return { loading: false, response: action.payload };

    case CATEGORY_FETCH_FAIL:
      return { loading: false, error: action.payload };

    case CATEGORY_FETCH_RESET:
      return {};

    default:
      return state;
  }
};
