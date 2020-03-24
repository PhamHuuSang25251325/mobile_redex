import {
    FETCH_PRODUCTS,
    FETCHING_PRODUCTS,
    ADD_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM,
    CHECK_OUT,
    REQUEST_ERROR
} from '../action/cart.action';


const initialState = {
    listItem: [],
    loading: false,
    message_error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                listItem: action.items,
                loading: false
            }
        case FETCHING_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        case ADD_ITEM:
            let index = state.listItem.findIndex(item => item.id === action.item.id);
            if (index === -1) {
                return {
                    ...state,
                    listItem: [...state.listItem, action.item]
                }
            }
            return {
                ...state,
                listItem: state.listItem.map(item => item.id !== action.item.id ? item : { ...item, quantity: item.quantity + action.item.quantity })
            }
        case UPDATE_ITEM:
            return {
                ...state,
                listItem: state.listItem.map(item => item.id !== action.item.id ? item : action.item)
            }
        case DELETE_ITEM:
            return {
                ...state,
                listItem: state.listItem.filter(item => item.id !== action.id)
            }
        case CHECK_OUT:
            return initialState;

        case REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                message_error: action.message

            }

        default:
            return state;
    }
}
