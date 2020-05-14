import {createStore, combineReducers, applyMiddleware} from 'redux'
import {postReducer} from './reducers/post'
import thunkMiddleware from 'redux-thunk';


const rootReducer = combineReducers({
    post:postReducer
})



export default createStore(rootReducer, applyMiddleware(thunkMiddleware))