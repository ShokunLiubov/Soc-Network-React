import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
    let user = props.userProfile
    
    let profile = (user.profile != undefined) ? user.profile[0] : {}
    console.log(user);
    
    return (
        <div className={styles.post}>
            <div className={styles.personInfo}>
                <img src='images/ava.png' />
                <div className={styles.postInfo}>
                    <div className={styles.nickname}>Steve Jobs</div>
                    <div className={styles.time}>{props.time}</div>
                </div>

            </div>

            <div className={styles.massage}>{props.massage}</div>
        <div className={styles.like}>
        <button>
                <img src="images/like.svg" />
                <div className={styles.countLike}>{props.countLikes}</div>
            </button> 
        </div>
        </div>
    )
}

export default Post;