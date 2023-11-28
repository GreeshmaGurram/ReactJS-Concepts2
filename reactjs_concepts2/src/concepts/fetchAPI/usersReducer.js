import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST } from "./userActions"


const initialState = {
    loading : false,
    data : [],
    error : ''
}

const usersReducer = (state = initialState, action) => {
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

export default usersReducer