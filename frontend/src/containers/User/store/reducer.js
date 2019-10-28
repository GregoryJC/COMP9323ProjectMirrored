import { ERROR_MSG, LOGIN_SUCCESS, LOGOUT } from "./constants"

const defaultState = {
    isAuth: false,
    errorMsg: '',
    username: '',
    email: '',
    jwt: '',
    // itemInCart: 0,
    cookieFinish: 'false',
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                errorMsg: '',
                username: action.payload.username,
                jwt: action.payload.jwt,
                cookieFinish:true
            }
        case LOGOUT:
            return defaultState
        case ERROR_MSG:
            return {...state, errorMsg:action.msg}
        default:
            return state
    }
}
