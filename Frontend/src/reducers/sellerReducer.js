import {
  SELLER_APPLY_REQUEST,
  SELLER_APPLY_SUCCESS,
  SELLER_APPLY_FAIL,
  SELLER_APPLY_RESET,
} from './../constants/userConstants'

export const sellerApplyReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_APPLY_REQUEST:
      return { loading: true }

    case SELLER_APPLY_SUCCESS:
      return { loading: false, response: action.payload }

    case SELLER_APPLY_FAIL:
      return { loading: false, error: action.payload }

    case SELLER_APPLY_RESET:
      return {}

    default:
      return state
  }
}

