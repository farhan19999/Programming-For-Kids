import  {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, LOGOUT_USER} from '../types/user.type';
import axios from 'axios';


export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (userid) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: userid
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

export const loginUser = (email_address, password) => {
    return (dispatch, getState) => {
        dispatch(fetchUserRequest())
        const server_url = process.env.REACT_APP_SERVER_URL;
        axios.post(`${server_url}/api/auth/login/`, { email_address : email_address, password : password})
            .then(response => {
                const user = response.data
                if(user.success === true) {
                    dispatch(fetchUserSuccess(user.userid))
                } else {
                    dispatch(fetchUserFailure(user.message))
                }
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUserFailure(errorMsg))
            })
    }
}





