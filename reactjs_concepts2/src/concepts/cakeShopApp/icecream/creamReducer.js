import { BUY_ICECREAM } from "./creamAction"


const initialState = {
    noOfIceCreams : 10
}

const creamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM : 
            return {
                ...state,
                noOfIceCreams : state.noOfIceCreams - 1
            }
        default: return state
    }
}

export default creamReducer