const SET_USER_DATA = 'SET-USER-DATA'
const UN_FOLLOW = 'UN-FOLLOW'

let initialState = {
    userId: undefined,
    email: undefined,
    login: undefined,
    isFetching: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (data) => ({ type: SET_USER_DATA, data })  

export const toggleFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default authReducer;



