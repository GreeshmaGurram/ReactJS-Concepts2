//  this code is in nodejs

const redux = require('redux')
const createStore = redux.createStore()

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
const initialState = {
    noOfCakes : 10,
    noOfIcecreams : 20
}

// controls how state transition happens
const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE : return{
            ...state, 
            // to get all other states in the object as it is
            noOfCakes : state.noOfCakes - 1
        }
        case BUY_ICECREAM : return{
            ...state, 
            // to get all other states in the object as it is
            noOfIcecreams : state.noOfIcecreams - 1
        }
        default : return state
    }
}

//1st step
const store = createStore(reducer)
console.log('ini state', store.getState())
// subscribe() called after every change in state
// attached a listeneer to the store
const unsubscribe = store.subscribe(() => console.log('up state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCream())

unsubscribe()