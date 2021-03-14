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
  PRODUCT_FETCH_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_RESET,
  PRODUCT_DELETE_SUCCESS,
} from "./../constants/productConstants";

export const getProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
      return { loading: true };

    case PRODUCT_FETCH_SUCCESS:
      return { loading: false, response: action.payload };

    case PRODUCT_FETCH_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_FETCH_RESET:
      return {};

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



export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };

    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, response: action.payload };

    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};




export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };

    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, response: action.payload };

    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_DELETE_RESET:
      return {};

    default:
      return state;
  }
};
