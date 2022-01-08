import { IS_USER_SIGNUP_ERROR, IS_USER_SIGNUP_LOADING, USER_SIGNUP } from "../types"

const userdata = {
    loading: false,
    user: {},
    error: null
}
export const signupReducer = (state = userdata, action) => {
    switch (action.type) {
        case IS_USER_SIGNUP_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case USER_SIGNUP:
            return {
                ...state,
                user: action.payload
            }
        case IS_USER_SIGNUP_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}