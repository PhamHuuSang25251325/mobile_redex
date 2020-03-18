import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-community/async-storage';
import apiHepler from './../services/axiosConfig';

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
    isLoading: true,
    err_message : ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RESTORE_TOKEN:
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
                 err_message : action.message
            }

        case LOGOUT:
            return {
               
            }

        default:
            return state;
    }
}

const login = dispatch => async ({ username, password }) => {
    dispatch({
        type: LOGIN_REQUEST
    })
    try {
        const data = await apiHepler.post('/login', {
            email : username,
            password : password
        });
        const {token} = data.data;
        await AsyncStorage.setItem('userToken', token);
        dispatch({
            type: LOGIN_SUCCESS,
            token
        })
    } catch ({response : {data}}) {
        dispatch({
            type: LOGIN_FAILURE,
            message : data.message
        })
    }

}

const restoreToken = dispatch => (token) => {
    dispatch({
        type: RESTORE_TOKEN,
        token
    })

}

const logout = dispatch => async () => {
    await AsyncStorage.removeItem('userToken')
    dispatch({
        type: LOGOUT,
    })

}

export const { Context, Provider } = createDataContext(reducer, { login, restoreToken, logout }, initialState); 