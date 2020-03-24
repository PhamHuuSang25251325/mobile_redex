
import AsyncStorage from '@react-native-community/async-storage';
import apiHepler from '../../../services/axiosConfig';
import { ToastAndroid } from 'react-native';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const login = ({ username, password }) => async dispatch => {
    dispatch({
        type: LOGIN_REQUEST
    })
    try {
        const data = await apiHepler.post('/login', {
            email: username,
            password: password
        });
        const { token } = data.data;
        await AsyncStorage.setItem('userToken', token);
        dispatch({
            type: LOGIN_SUCCESS,
            token
        })
    } catch ({ response: { data } }) {
        dispatch({
            type: LOGIN_FAILURE,
            message: data.message
        })
    }

}

export const register = ({ email, password, name }) => async dispatch => {

    try {
        await apiHepler.post('/register', {
            email,
            password,
            name
        });
        ToastAndroid.show('Đăng kí tài khoản thành công', ToastAndroid.LONG, ToastAndroid.TOP);

    } catch ({ response: { data } }) {

        ToastAndroid.show(data.message, ToastAndroid.LONG, ToastAndroid.TOP);
    }

}


export const logout = () => async dispatch => {
    await AsyncStorage.removeItem('userToken')
    dispatch({
        type: LOGOUT,
    })

}

export const refreshToken = () => async dispatch => {
    try {
        const res = await apiHepler.post('/refresh');
        const token = res.data.access_token;
        await AsyncStorage.setItem('userToken', token);
        dispatch({
            type: REFRESH_TOKEN,
            token
        })
      
    } catch (error) {
        dispatch({
            type: LOGOUT
        })
    }
}