const initialState = {
    logginIn: false,
    loggedIn: false,
    user: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                logginIn: true,
                user: action.user
            }
        case 'LOGIN_SUCCESS':
            return {
                loggedIn: true,
                user: action.user
            }
        case 'LOGIN_FAILURE':
            return {}

        case 'LOGOUT':
            return {}

        default:
            return state;
    }
}