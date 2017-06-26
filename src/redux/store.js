import { createStore, applyMiddleware, combineReducers } from 'redux'
import authReducer from 'Redux/reducers/auth';
import thunk from 'redux-thunk'


const reducers = combineReducers({
    auth: authReducer
})

// export default createStore(reducers, applyMiddleware(thunk, logMiddleware, ajaxMiddleware))
export default createStore(reducers, applyMiddleware(thunk))