import {
  IS_LOADING,
  IS_USER_LOGIN_ERROR,
  IS_USER_LOGIN_LOADING,
  USER_LOGIN,
} from "../types";
import axios from "axios";
import { endPoint, middlePoint, startPoint } from "../../config";
import Authentication from "../../config/auth/Authentication";

export const LoginAction = userData => async dispatch => {
  try {
    dispatch({
      type: IS_LOADING,
      payload: true,
    });

    dispatch({
      type: IS_USER_LOGIN_LOADING,
      payload: true,
    });

    await axios
      .post(
        `${startPoint.baseUrl}${middlePoint.user}${endPoint.login}`,
        userData,
      )
      .then(res => {
        dispatch({
          type: USER_LOGIN,
          payload: res.data,
        });
        res.data.userFound &&
          Authentication.setItem("isLogin", res.data.userFound);
          Authentication.setItem("user", res.data.username);
      });

    dispatch({
      type: IS_USER_LOGIN_LOADING,
      payload: false,
    });

    dispatch({
      type: IS_LOADING,
      payload: false,
    });
  } catch (err) {
    dispatch({
      type: IS_USER_LOGIN_ERROR,
      payload: "Login failed",
    });

    dispatch({
      type: IS_LOADING,
      payload: false,
    });

    dispatch({
      type: IS_USER_LOGIN_LOADING,
      payload: false,
    });
  }
};
