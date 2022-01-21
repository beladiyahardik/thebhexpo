import axios from "axios";
import { endPoint, middlePoint, startPoint } from "../../config";
import {
  GET_POST,
  IS_GET_POST_ERROR,
  IS_GET_POST_LOADING,
  IS_LOADING,
} from "../types";

export const getPostAction = () => async dispatch => {
  try {
    dispatch({
      type: IS_LOADING,
      payload: true,
    });

    dispatch({
      type: IS_GET_POST_LOADING,
      payload: true,
    });

    await axios
      .get(`${startPoint.baseUrl}${middlePoint.post}${endPoint.getPost}`)
      .then(res => {
        dispatch({
          type: GET_POST,
          payload: res.data,
        });
      });

    dispatch({
      type: IS_LOADING,
      payload: false,
    });

    dispatch({
      type: IS_GET_POST_LOADING,
      payload: false,
    });
  } catch (err) {
    dispatch({
      type: IS_GET_POST_ERROR,
      payload: err,
    });

    dispatch({
      type: IS_LOADING,
      payload: false,
    });
    dispatch({
      type: IS_GET_POST_LOADING,
      payload: false,
    });
  }
};
