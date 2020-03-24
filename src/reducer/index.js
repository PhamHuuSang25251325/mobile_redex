import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import cartReducer from './cart.reducer';

const reducer= {
    authReducer,
    cartReducer
}


export default combineReducers(reducer);