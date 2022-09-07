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

