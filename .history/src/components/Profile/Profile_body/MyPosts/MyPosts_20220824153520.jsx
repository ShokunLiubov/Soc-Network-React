import React from 'react';
import styles from './MyPosts.module.css'
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
            <div>
                <span className={styles.namePost}>New post</span>
                <div className={styles.newPost}>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} className={styles.newPostText} />
                    <button className='button' onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={styles.Posts}></div>
            {postsElement}
        </div>
    )
}

export default MyPosts;