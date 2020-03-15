import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-community/async-storage';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';
const RESTORE_TOKEN = 'RESTORE_TOKEN'

const initialState = {
    logginIn: false,
    loggedIn: false,
    user: null,
    userToken: null,
    isLoading : true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RESTORE_TOKEN:
            return {
                loggedIn: true,
                userToken: action.token,
                isLoading : false
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
                 userToken : action.token
            }
        case LOGIN_FAILURE:
            return {}

        case LOGOUT:
            return {}

        default:
            return state;
    }
}

const login = dispatch => async ({ username, password }) => {
    dispatch({
        type : LOGIN_REQUEST
    })
    await AsyncStorage.setItem('userToken', username);
    dispatch({
        type : LOGIN_SUCCESS,
        token : username
    })
}

const restoreToken = dispatch =>  (token) => {
    dispatch({
        type : RESTORE_TOKEN,
        token
    })
   
}

const logout = dispatch =>async () => {
    await AsyncStorage.removeItem('userToken')
    dispatch({
        type : LOGOUT,
    })
   
}

export const { Context, Provider } = createDataContext(reducer, { login,restoreToken,logout }, initialState); 