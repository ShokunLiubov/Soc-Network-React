import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import communityReducer from "./community-reducer"
import authReducer from "./auth-reducer"

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    communityPage : communityReducer,
    auth: authReducer
}) 

let store = createStore(reducers, applyMiddleware())

window.store = store

export default store;