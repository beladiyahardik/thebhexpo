import { IS_USER_LOGIN_ERROR, IS_USER_LOGIN_LOADING, USER_LOGIN } from "../types"

const userLogin = {
    loading: false,
    user: {},
    error: ''
}
export const LoginReducer = (state = userLogin, action) => {
    switch (action.type) {

        case IS_USER_LOGIN_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case USER_LOGIN:
            return {
                ...state,
                user: action.payload
            }

        case IS_USER_LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}