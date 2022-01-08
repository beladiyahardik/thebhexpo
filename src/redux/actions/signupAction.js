import axios from "axios"
import { endPoint, middlePoint, startPoint } from "../../config"
import Authentication from "../../config/auth/Authentication"
import { IS_LOADING, IS_USER_SIGNUP_ERROR, IS_USER_SIGNUP_LOADING, USER_SIGNUP } from "../types"

export const signupAction = (userData) => async (dispatch) => {

    try {
        dispatch({
            type: IS_LOADING,
            payload: true
        })

        dispatch({
            type: IS_USER_SIGNUP_LOADING,
            payload: true
        })

        await axios.post(`${startPoint.baseUrl}${middlePoint.user}${endPoint.signup}`, userData).then((res) => {
            dispatch({
                type: USER_SIGNUP,
                payload: res.data
            })
            res.data.userCreate && Authentication.setItem('isLogin', res.data.userCreate)
        })

        dispatch({
            type: IS_USER_SIGNUP_LOADING,
            payload: false
        })

        dispatch({
            type: IS_LOADING,
            payload: false
        })


    } catch (err) {
        dispatch({
            type: IS_USER_SIGNUP_ERROR,
            payload: "Signup failed"
        })
        dispatch({
            type: IS_USER_SIGNUP_LOADING,
            payload: false
        })

        dispatch({
            type: IS_LOADING,
            payload: false
        })
    }
}