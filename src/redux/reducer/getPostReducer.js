import {
  GET_POST,
  IS_GET_POST_ERROR,
  IS_GET_POST_LOADING,
  IS_LOADING,
} from "../types";

const getPost = {
  loading: false,
  post: null,
  error: null,
};
export const getPostReducer = (state = getPost, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case IS_GET_POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
