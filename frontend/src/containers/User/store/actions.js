import APIServices from "../../../api"
import { ERROR_MSG, LOGIN_SUCCESS, LOGOUT } from "./constants"

const apiServices = new APIServices()

export function loginSuccess(data) {
    return {type: LOGIN_SUCCESS, payload: data}
}

function errorMsg(msg) {
    console.log(msg)
    return {msg, type: ERROR_MSG}
}

export function userLogin(email, password) {
    if (!email) {
        return dispatch => dispatch(errorMsg('Email should not be empty'))
    }
    if (!password) {
        return dispatch => dispatch(errorMsg('Password should not be empty'))
    }
    return async dispatch => {
        try {
            const res = await apiServices.userLogin(email, password)
            // success
            console.log('login')
            console.log(res.data)
            localStorage.setItem('logged', JSON.stringify(res.data))
            dispatch(loginSuccess(res.data))
        } catch (err) {
            // failed
            dispatch(errorMsg('User doesn\'t exist/wrong password'))
        }
    }
}

export function userRegister(email, username, password, passwordConfirm) {
    if (!username) {
        return dispatch => dispatch(errorMsg('Username should not be empty'))
    }
    if (!password) {
        return this.setState({errorMsg: 'password should not be empty'})
    }
    if (passwordConfirm !== password) {
        return this.setState({errorMsg: 'password and confirmed password should be same'})
    }
    return async dispatch => {
        try {
            const res = await apiServices.userRegister(email, username, password)
            // success
            console.log(res)
            dispatch(loginSuccess(res.data))
        } catch (err) {
            dispatch(errorMsg('Email address has been taken'))
        }
    }
}

export function logout() {
    localStorage.clear()
    return dispatch => {
        dispatch({type: LOGOUT})
    }
}