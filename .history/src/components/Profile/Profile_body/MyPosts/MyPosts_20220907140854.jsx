import React from 'react';
import styles from './MyPosts.module.css'
import NewPostForm from './NewPostForm/NewPostForm';
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsElement = props.postsData.map(
        post =>
            <Post userProfile={props.userProfile} key={post.id} massage={post.massage} countLikes={post.countLikes} time={post.time} />
    )


    return (
        <div className={styles.postFeed}>
                <NewPostForm newPostText={props.newPostText} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>
            
            <div className={styles.Posts}></div>
            {postsElement}
        </div>
    )
}

export default MyPosts;