import apiHepler from './../services/axiosConfig';
import { ToastAndroid } from 'react-native'
export const FETCHING_PRODUCTS = 'FETCHING_PRODUCTS';
export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHECK_OUT = 'CHECK_OUT';
export const REQUEST_ERROR = 'REQUEST_ERROR'



export const addItem = (item) => async dispatch => {
    try {
        const data = await apiHepler.post('/carts', item);
        const { cart } = data.data
        dispatch({
            type: ADD_ITEM,
            item: cart
        })
        ToastAndroid.show('Đã thêm sản phẩm vào giỏ hàng', ToastAndroid.LONG, ToastAndroid.TOP);
    } catch (error) {
        console.log({ error })
    }
}

export const updateItem = (item) => async dispatch => {
    try {
        const { id } = item;
        const data = await apiHepler.put(`/carts/${id}`, item)
        dispatch({
            type: UPDATE_ITEM,
            item
        })
    } catch (error) {

    }

}

export const getItems = () => async dispatch => {
    dispatch({
        type: FETCHING_PRODUCTS
    })
    try {
        const data = await apiHepler.get('/carts');
        const items = data.data;
        dispatch({
            type: FETCH_PRODUCTS,
            items
        })
    } catch (error) {
        console.log({ error });
        dispatch({
            type: REQUEST_ERROR,
            message_error: 'XXXXX'
        })
    }

}


export const deleteItem = (id) => async dispatch => {

    try {
        await apiHepler.delete(`/carts/${id}`);
        dispatch({
            type: DELETE_ITEM,
            id
        })
        ToastAndroid.show('Xóa thành công', ToastAndroid.LONG, ToastAndroid.TOP);
    } catch (error) {
        console.log({ error })
    }


}

export const checkout = () => async dispatch => {
    dispatch({
        type: CHECK_OUT,
    })

}