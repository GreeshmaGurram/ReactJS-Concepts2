Redux : predictable state container for js apps
- not tied to react i.e., can be used with angular, vue or vanilla js
- stores and manages state of the app i.e., state of all indiv comps
- contains state outside the components

Store : holds state of all the comps in app 
==> allows access to state via getState()
==> allows access to update state via dispatch(action)
==> register listeners via subscribe(listener)
Action : describes what happened/ changes in the state
Reducer : ties store and actions together i.e., performs the action and manipulates the store accordingly ==> Reducer(prevState, action) => returns new/next State
==> app's state changes in response to actions sent to store

Middleware : suggested way to extend Redux with custom functionality i.e., can use Redux with extra features 
==> provides a 3rd part extension pt b/w dispatching action and moment it reaches the reduce
==> can use middleware for logging, crash reporting and performing async tasks

redux-logger => middleware for logging console 
redux-thunk => middleware for defining async action creators

useSelector hook => acts as mapStateToProps func
=> used to get hold of any state in store
useDispatch hook ==> acts as mapDispatchToProps 

use react dev tools extension: setp1 npm install --save redux-devtools-extension
step 2 : import { composeWithDevTools } from 'redux-devtools-extension';
 in store.js file