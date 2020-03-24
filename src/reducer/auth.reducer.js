import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REFRESH_TOKEN
} from '../action/auth.action';


const initialState = {
    logginIn: false,
    loggedIn: false,
    user: null,
    userToken: null,
    isLoading: true,
    err_message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REFRESH_TOKEN:
            return {
                loggedIn: true,
                userToken: action.token,
                isLoading: false
            }
        case LOGIN_REQUEST:
            return {
                logginIn: true,
                user: action.user,
            }
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user,
                userToken: action.token
            }
        case LOGIN_FAILURE:
            return {
                err_message: action.message
            }
           
        case LOGOUT:
            return {

            }

        default:
            return state;
    }
}



