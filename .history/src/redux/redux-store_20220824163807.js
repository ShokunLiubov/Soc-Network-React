import {combineReducers, legacy_createStore as createStore} from "redux"
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import communityReducer from "./community-reducer"

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    communityPage : communityReducer,
    authReducer: authReducer
}) 

let store = createStore(reducers)

export default store;