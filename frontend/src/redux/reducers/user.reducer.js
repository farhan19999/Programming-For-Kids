const initialState = {
    loading: false,
    loggedIn: false,
    userid: null,
    error: ''
};


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_USER_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                userid: action.payload,
                loggedIn: true,
                error: ''
            }
        case 'FETCH_USER_FAILURE':
            return {
                ...state,
                loading: false,
                userid: null,
                error: action.payload
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                loading: false,
                loggedIn: false,
                userid: null,
                error: ''
            }
        default: return state
    }
}