const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    userData: [ 
        
    ]
}
const communityReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                userData: state.userData.map (user => {
                    if(user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                userData: state.userData.map (user => {
                    if(user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                userData: [...state.userData, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID })  

export const unFollowAC = (userID) => ({ type: UN_FOLLOW, userID }) 

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default communityReducer;