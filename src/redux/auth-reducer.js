import { stopSubmit } from "redux-form"
import { usersAuth } from "../api/api"

const SET_USER_DATA = 'auth/SET-USER-DATA'

let initialState = {
    userId: undefined,
    login: undefined,
    password: undefined,
    isAuth: false,
    myUserProfile: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, login, password, isAuth) => ({ type: SET_USER_DATA, payload: {userId, login, password, isAuth} })  

export const getAuthUserData = () => {
    return (dispatch) => {
        return usersAuth.getAuth().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.authUserId, data.data.login, data.data.password, true))
            }
        })
    }
}

export const login = ( login, password) => {
    return (dispatch) => {
            usersAuth.loginPerson(login).then(data => {
                if(data === undefined) {
                    return dispatch( stopSubmit('login', {_error: 'Incorrect login or password'}) )
                }

                if(data.login === login && data.password === password) {
                    usersAuth.login(data.id, login, password).then(data => {  
                        dispatch(getAuthUserData())               
                })
                }  else {
                    dispatch( stopSubmit('login', {_error: 'Incorrect login or password'}) )
                }
            })

        
    }
}

export const logOut = () => {
    return (dispatch) => {
        usersAuth.logOut().then(data => {
                dispatch(setAuthUserData(null, null, null, false))
        })
    }
}

export default authReducer;



