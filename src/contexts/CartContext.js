import createDataContext from './createDataContext';

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const CHECK_OUT = 'CHECK_OUT';

const initialState = {
    listItem: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                listItem: action.items
            }
        case ADD_ITEM:
            let index = state.listItem.findIndex(item => item.id === action.item.id);
            if (index !== -1) {
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
                listItem: state.listItem.filter(item => item.id !== action.item.id)
            }
        case CHECK_OUT:
            return initialState;

        default:
            return state;
    }
}

const addItem = dispatch => async (item) => {
    // call API
    dispatch({
        type: ADD_ITEM,
        item
    })
}

const updateItem = dispatch => async (item) => {
    // call API
    dispatch({
        type: UPDATE_ITEM,
        item
    })
}

const getItems = dispatch => async () => {
    // call API
    const items = [];
    dispatch({
        type: FETCH_PRODUCTS,
        items
    })
}


const deleteItem = dispatch => (item) => {
    //call Api
    dispatch({
        type: DELETE_ITEM,
        item
    })

}

const checkout = dispatch => async () => {
    dispatch({
        type: CHECK_OUT,
    })

}

export const { Context, Provider } = createDataContext(reducer, { addItem, updateItem, deleteItem, getItems, checkout }, initialState); 