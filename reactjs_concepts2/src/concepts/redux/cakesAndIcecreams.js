//  this code is in nodejs

const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware

// logger middleware ==> extra feature in redux for getting console.log statements for every state change
const logger = reduxLogger.createLogger()


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// action creator
function buyCake(){
    return {
        type : BUY_CAKE,
        info : 'First redux action',
    }
}
function buyIceCream(){
    return {
        type : BUY_ICECREAM,
        info : 'First redux action',
    }
}
const initialCakeState = {
    noOfCakes : 10,
}
const initialIceCreamState = {
    noOfIcecreams : 10
}
// controls how state transition happens
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE : return{
            ...state, 
            // to get all other states in the object as it is
            noOfCakes : state.noOfCakes - 1
        }
        default : return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM : return{
            ...state, 
            // to get all other states in the object as it is
            noOfIcecreams : state.noOfIcecreams - 1
        }
        default : return state
    }
}

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

//1st step
const store = createStore(rootReducer, applyMiddleWare(logger))
console.log('ini state', store.getState())
// subscribe() called after every change in state
// attached a listeneer to the store
const unsubscribe = store.subscribe(() => console.log('up state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCream())

unsubscribe()