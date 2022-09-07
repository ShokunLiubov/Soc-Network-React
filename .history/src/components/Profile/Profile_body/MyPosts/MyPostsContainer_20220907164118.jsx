import React from 'react';
import MyPosts from './MyPosts';
import { connect } from 'react-redux'
import { addPost } from '../../../../redux/profile-reducer';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        userProfile: state.profilePage.userProfile
    }
}

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts)

export default MyPostsContainer;