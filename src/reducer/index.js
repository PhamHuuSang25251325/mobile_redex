import {combineReducers} from 'redux';
import authReducer from './../modules/auth/redux/reducer';
import cartReducer from '../modules/cart/redux/reducer';

const reducer= {
    authReducer,
    cartReducer
}


export default combineReducers(reducer);