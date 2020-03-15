import createDataContext from './createDataContext';
import apiHepler from './../services/axiosConfig';

const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'up':
            return state + 1;
        case 'down':
            return state - 1;

        default:
            return state;
    }
}


const up = (dispatch) => async () => {
    try {
        const data = await apiHepler.get('/users');
        dispatch({
            type: 'up'
        })
        setTimeout(() => {
            dispatch({
                type: 'down'
            })
        }, 2000)
    } catch (error) {
        console.log(error)
    }
}



export const { Context, Provider } = createDataContext(reducer, { up }, 0);
