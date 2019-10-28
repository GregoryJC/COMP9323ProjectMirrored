import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as userReducer } from '../containers/User/store'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    user: userReducer,
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export default store
