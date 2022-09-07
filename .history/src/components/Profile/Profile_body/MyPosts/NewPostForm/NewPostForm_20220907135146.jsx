import React from 'react';
import styles from './MyPosts.module.css'

const NewPostForm = (props) => {
    return (
        <form>
            <span className={styles.namePost}>New post</span>
            <div className={styles.newPost}>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} className={styles.newPostText} />
                <button className='button' onClick={addPost}>Add post</button>
            </div>
        </form>
    )
}

export default NewPostForm;