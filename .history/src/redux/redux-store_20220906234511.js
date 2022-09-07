import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import communityReducer from "./community-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    communityPage : communityReducer,
    auth: authReducer,
    form: formReducer
}) 

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store;