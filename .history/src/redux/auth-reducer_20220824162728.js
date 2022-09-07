const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_PAGE = 'SET-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    userId: 3,
    email: 'tertyshnaya99@gmail.com',
    login: 'ShokunLiubov',
    isFetching: false
}
const authReducer = (state = initialState, action) => {
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
                userData: action.users
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.page
                }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.UsersTotalCount
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

export const follow = (userID) => ({ type: FOLLOW, userID })  

export const unFollow = (userID) => ({ type: UN_FOLLOW, userID }) 

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setPage = (page) => ({ type: SET_PAGE, page })

export const setUsersTotalCount = (UsersTotalCount) => ({ type: SET_USERS_TOTAL_COUNT, UsersTotalCount })

export const toggleFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default communityReducer;


// Создать кнопки prev next 
// if(currentPage > 1) { prev
// } минус 1  при отрисовки подставляться значения, исключение первая страница
// Отображать в пагинации 5 стр и одну последнюю , учесть если будет меньше 5 стр

