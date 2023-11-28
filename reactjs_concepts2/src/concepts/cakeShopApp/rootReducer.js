import { combineReducers } from "redux";

import cakeReducer from "./cakeReducer";
import creamReducer from "./icecream/creamReducer";
import usersReducer from "../fetchAPI/usersReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : creamReducer,
    users : usersReducer
})

export default rootReducer