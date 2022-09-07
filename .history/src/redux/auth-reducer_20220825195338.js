const SET_USER_DATA = 'SET-USER-DATA'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    userId: undefined,
    email: undefined,
    login: undefined,
    isAuth: false,
    userProfile: {}
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
            case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
                
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} })  

export const setUserProfile = (profile) => 
    ({ type: SET_USER_PROFILE, profile})

export default authReducer;



