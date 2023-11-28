
const redux = require('redux')
const reduxThunk = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware


const initialState = {
    loading : false,
    data : [],
    error : ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = users => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}
const fetchUsersFailure = error => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading : true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading : false,
                data : action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading : false,
                error : action.payload,
                data: []
            }
        default :
        return state
    }
}

// async action creator ==> api call
//  using redux-thunk we can return function which can have side effects like async api calls rather than action object
// also dispatch actions coz receives dispatch method as its arg
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
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

const store = createStore(reducer, applyMiddleware(reduxThunk))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())