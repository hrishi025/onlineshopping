import axios from "axios";
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstants";
import { USER_SIGNUP_FAIL } from "./../constants/userConstants";

export const signup = (email, password, name, phone) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });

    const url = "http://localhost:4000/user/signup";

    const body = {
      email,
      password,
      name,
      phone,
    };

    const header = {
      "Content-Type": "application/json",
    };

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        });
      });
  };
};
