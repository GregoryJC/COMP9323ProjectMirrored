import APIServices from "../../../api"
import { ERROR_MSG, LOGIN_SUCCESS, LOGOUT } from "./constants"
import { Auth } from "aws-amplify"


const apiServices = new APIServices()

export function loginSuccess(data) {
    console.log(document.cookie)
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
            console.log('login')
            console.log(res)
            console.log(res.data)
            localStorage.setItem('logged', JSON.stringify(res.data))
            dispatch(loginSuccess(res.data))
            // Auth.signIn({
            //     username: email, // Required, the username
            //     password: password, // Optional, the password
            // }).then(user => {
            //     // success
            //     console.log(user)
            //     const payload = {
            //         email: user.attributes.email,
            //         nickname: user.attributes.nickname,
            //         jwt: user.getSignInUserSession().getAccessToken().getJwtToken()
            //     }
            //     localStorage.setItem('logged', JSON.stringify(payload))
            //     apiServices.userLogin(email, password).then(res => {
            //         console.log(res)
            //     })
            //     dispatch(loginSuccess(payload))
            // }).catch(err => {
            //     dispatch(errorMsg((err.message)))
            // })
        } catch (err) {
            // failed
            dispatch(errorMsg('User doesn\'t exist/wrong password'))
        }
    }
}

export function userRegister(email, username, password, passwordConfirm) {
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
    if (!email) {
        return dispatch => dispatch(errorMsg('Email should not be empty'))
    }
    if (!username) {
        return dispatch => dispatch(errorMsg('Username should not be empty'))
    }
    if (!password) {
        return dispatch => dispatch(errorMsg('Password should not be empty'))
    }
    if (emailReg.test(email) === false) {
        return dispatch => dispatch(errorMsg('Email is not available'))
    }
    if (passwordConfirm !== password) {
        return dispatch => dispatch(errorMsg('Password and confirmed password should be same'))
    }
    if (passwordReg.test(password) === false) {
        return dispatch => dispatch(errorMsg('Password format not satisfied'))
    }
    return async dispatch => {
        try {
            const res = await apiServices.userRegister(email, password)
            console.log('register')
            console.log(res.data)
            localStorage.setItem('logged', JSON.stringify(res.data))
            dispatch(loginSuccess(res.data))
            // Auth.signUp({
            //     username: email,
            //     password: password,
            //     attributes: {
            //         nickname: username,                          // optional - nick
            //         // other custom attributes
            //     },
            // })
            //     .then(user => {
            //         console.log(user)
            //         const payload = {
            //             email: email,
            //             nickname: username,
            //             jwt: ''
            //         }
            //         localStorage.setItem('logged', JSON.stringify(payload))
            //         dispatch(loginSuccess(payload))
            //     })
            //     .catch(err => {
            //         dispatch(errorMsg(err.message))
            //     })
        } catch (err) {
            dispatch(errorMsg('Register failed'))
        }
    }
}

export function logout() {
    localStorage.clear()
    return dispatch => {
        dispatch({type: LOGOUT})
    }
}