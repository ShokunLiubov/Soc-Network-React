import React from 'react';
import styles from './../Community.module.scss'

const Follow = (props) => {

    return (
        <div>

            {props.followed
                ? <div className={styles.unFollow}>
                    <button disabled={props.isFollowing.some(id => id === props.id)} onClick={() => {
                        props.unFollow(props.id, props.followedId)
                    }}>Unfollow</button>
                </div>
                : <div className={styles.follow}>

                    <button disabled={props.isFollowing.some(id => id === props.id)} onClick={() => {
                        props.follow(props.id)
                    }}>Follow</button>
                </div>}

        </div>
    )
}

export default Follow;

