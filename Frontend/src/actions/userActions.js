import axios from 'axios'
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
  
 PRODUCT_FETCH_REQUEST ,
 PRODUCT_FETCH_SUCCESS ,
 PRODUCT_FETCH_FAIL,
 USER_PROFILE_REQUEST,
 USER_PROFILE_SUCCESS,
 USER_PROFILE_FAIL, 
 
} from '../constants/userConstants'
import { USER_SIGNUP_FAIL } from './../constants/userConstants'


export const logout = () => {
  return (dispatch) => {
    sessionStorage.removeItem('token')
    dispatch({ type: USER_SIGNOUT })
    document.location.href = '/signin'
  }
}


export const signup = (email, password, name, phone) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    })

    const url = 'http://localhost:4000/user/signup'

    const body = {
      email,
      password,
      name,
      phone,
    }

    const header = {
      'Content-Type': 'application/json',
    }

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}

export const signin = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    })

    const url = 'http://localhost:4000/user/signin'

    const body = {
      email,
      password,
    }

    const header = {
      'Content-Type': 'application/json',
    }

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error,
        })
      })
  }
}

export const editprofile = (password, name, phone) => {
  return (dispatch) => {
    dispatch({
      type: USER_PROFILE_REQUEST,
    })

    const url = 'http://localhost:4000/user/edit'

    const body = {
      password,
      name,
      phone,
    }

    const header = {
      'Content-Type': 'application/json',
      token:sessionStorage['token'],
      
    }
    console.log(sessionStorage['token'])

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_PROFILE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_PROFILE_FAIL,
          payload: error,
        })
      })
  }
}

