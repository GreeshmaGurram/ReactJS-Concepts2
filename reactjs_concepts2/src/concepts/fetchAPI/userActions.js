import axios from "axios"

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const fetchUsersRequest = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = users => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}
export const fetchUsersFailure = error => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}

export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp => {
            const users = resp.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch( err => {
            const error = err.message
            dispatch(fetchUsersFailure(error))
        })
    }
}