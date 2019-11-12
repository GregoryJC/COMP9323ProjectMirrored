import { ERROR_MSG, LOGIN_SUCCESS, LOGOUT } from "./constants"

const defaultState = {
    isAuth: false,
    errorMsg: '',
    nickname: '',
    email: '',
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
                email: action.payload.email,
                nickname: action.payload.nickname,
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
