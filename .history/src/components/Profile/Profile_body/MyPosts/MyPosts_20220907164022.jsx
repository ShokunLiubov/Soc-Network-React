import React from 'react';
import styles from './MyPosts.module.css'
import NewPostReduxForm from './NewPostForm/NewPostForm';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.postsData.map(
        post =>
            <Post userProfile={props.userProfile} key={post.id} massage={post.massage} countLikes={post.countLikes} time={post.time} />
    )

    let addNewPost = (value) => {
        props.sandMassage(value.newMassageText)
    }

    return (
        <div className={styles.postFeed}>
                <NewPostReduxForm onSubmit={ addNewPost }/>
            
            <div className={styles.Posts}></div>
            {postsElement}
        </div>
    )
}

export default MyPosts;