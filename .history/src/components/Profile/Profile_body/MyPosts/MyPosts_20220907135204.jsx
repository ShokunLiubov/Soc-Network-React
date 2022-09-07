import React from 'react';
import styles from './MyPosts.module.css'
import NewPostForm from './NewPostForm/NewPostForm';
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsElement = props.postsData.map(
        post =>
            <Post userProfile={props.userProfile} key={post.id} massage={post.massage} countLikes={post.countLikes} time={post.time} />
    )

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.postFeed}>
                <NewPostForm />
            <div className={styles.Posts}></div>
            {postsElement}
        </div>
    )
}

export default MyPosts;