

import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import rootReducer from './Reducer'

const middleware = [thunk]
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
let store;

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools ){


   store = createStore(combineReducers({rootReducer}),compose(applyMiddleware(...middleware), ReactReduxDevTools));
}else{
   store = createStore(combineReducers({rootReducer}),compose(applyMiddleware(...middleware))
   )

}





/* 
const store = createStore(rootReducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 */
export default store