import { createSelector } from "reselect"

export const getUsers = (state) => {
    return state.communityPage.userData
}

export const getAuthUserId = (state) => {
    return state.auth.userId
}

// export const getUsersSelector = createSelector( getUsers, getAuthUserId, (users, authId)=> {
//     return users.filter(user => user.id != authId)
// })

export const getPageSize = (state) => {
    return state.communityPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.communityPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.communityPage.currentPage
}

export const getIsFetching = (state) => {
    return state.communityPage.isFetching
}

export const getIsFollowing = (state) => {
    return state.communityPage.isFollowing
}

