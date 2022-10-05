import { usersAPI } from "../api/api"
import { updateObjectInArray } from "../utils/object-helpers/object-helpers"


const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_PAGE = 'SET-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    userData: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    currentPageSize: 1,
    isFetching: false,
    isFollowing: []
}
const communityReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                userData: updateObjectInArray( state.userData, action.userID, "id", {followed: true})
            }
        case UN_FOLLOW:
            return {
                ...state,
                userData: updateObjectInArray( state.userData, action.userID, "id", {followed: false})
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userID) => ({ type: FOLLOW, userID })

export const unFollowSuccess = (userID) => ({ type: UN_FOLLOW, userID })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setPage = (page) => ({ type: SET_PAGE, page })

export const setUsersTotalCount = (UsersTotalCount) => ({ type: SET_USERS_TOTAL_COUNT, UsersTotalCount })

export const toggleFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const toggleFollowing = (isFollowing, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, userId })


export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleFetching(false))
            dispatch(setUsers(data))
            dispatch(setUsersTotalCount(20))
    }
}

export const getUsersOnPage = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(setPage(page))
        dispatch(toggleFetching(true))
        let data = await usersAPI.getUsers(page, pageSize)
            dispatch(toggleFetching(false))
            dispatch(setUsers(data))
    }
}

export const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowing(true, userId))
        let response = await apiMethod
            dispatch(actionCreator(userId))
            dispatch(toggleFollowing(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, usersAPI.postFollow(userId), followSuccess)
    }
}

export const unFollow = (userId, followedId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, usersAPI.deleteUnFollow(followedId), unFollowSuccess)
    }
}

export default communityReducer;

