import  {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, LOGOUT_USER, CHANGE_ROLE} from '../types/user.type';
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


export const changeRole = (role) => {
    return {
        type: CHANGE_ROLE,
        payload: role
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
                    dispatch(changeRole('user'))
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

export const loginAdmin = (email_address, password) => {
    return (dispatch, getState) => {
        dispatch(fetchUserRequest())
        const server_url = process.env.REACT_APP_SERVER_URL;
        axios.post(`${server_url}/api/auth/admin/login/`, { email_address : email_address, password : password})
            .then(response => {
                const user = response.data
                if(user.success === true) {
                    dispatch(fetchUserSuccess(user.userid))
                    dispatch(changeRole('admin'))
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





