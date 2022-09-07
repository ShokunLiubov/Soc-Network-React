import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
    userProfile: {},
    postsData: [
        { id: 1, massage: 'Hi, how are you?', countLikes: '12', time: '29 minutes ago' },
        { id: 2, massage: 'It is my first post', countLikes: '99+', time: 'yesterday' },
        { id: 3, massage: 'My name Liubov, I am wife Eugen', countLikes: '32', time: 'week ago' }
    ],
    newPostText: '',
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: Date.now(),
                massage: state.newPostText,
                countLikes: '0',
                time: new Date().toLocaleTimeString()
            }
            return {
                ...state,
                newPostText: '',
                postsData: [newPost, ...state.postsData]
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile

            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }


}

export const addPost = () => ({ type: ADD_POST })

export const updateNewPostText = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) =>
    ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) =>
    ({ type: SET_STATUS, status })

export const getUserProfile = (profileId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(profileId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getUserStatus = (profileId) => {
    return (dispatch) => {
        profileAPI.getStatusProfile(profileId).then(status => {
            dispatch(setStatus(status))
        })
    }
}

export const updateUserStatus = (status, profileId) => {
    return (dispatch) => {
        profileAPI.getStatusProfile(profileId).then(status => {
            dispatch(setStatus(status))
        })
    }
}



export default profileReducer;