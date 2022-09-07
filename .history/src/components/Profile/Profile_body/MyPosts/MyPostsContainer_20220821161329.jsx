import React from 'react';
import MyPosts from './MyPosts';
import { connect } from 'react-redux'
import { addPost, updateNewPostText } from '../../../../redux/profile-reducer';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, { addPost, updateNewPostText })(MyPosts)

export default MyPostsContainer;