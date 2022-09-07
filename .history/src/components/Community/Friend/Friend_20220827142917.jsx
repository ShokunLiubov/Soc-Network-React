import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from './../Community.module.css'

const Friend = (props) => {
    return (
        <div className={styles.friend}>

            <NavLink to={'/profile/' + props.id} className={styles.avatar}>
                <img className={styles.communityAva} src={props.ava != null ? props.ava : './../images/ava-woman.png'} />
                <div className={styles.decorationGrey}></div>
                <div className={styles.decorationWhite}></div>
            </NavLink>
            <div className={styles.personInfo} >
                <div className={styles.nickname}>{props.name}</div>
                <div className={styles.hang}>
                    <div className={styles.age}>{props.age}</div>
                    <div>•</div>
                    <div className={styles.gender}>{props.gender}</div>
                </div>

                {props.followed
                    ? <div className={styles.unFollow}>
                        <button disabled={props.isFollowing} onClick={() => {
                            props.toggleFollowing(true)
                            axios.delete(`http://localhost:3001/follow/${props.followedId}` , {
                                withCredentials: true
                            }).then(response =>  {
                                props.unFollow(props.id)
                                props.toggleFollowing(false)
                            })
                        }}>Unfollow</button>
                    </div>
                    : <div className={styles.follow}>

                        <button disabled={props.isFollowing} onClick={() => {
                            props.toggleFollowing(true)
                            axios.post(`http://localhost:3001/follow`, {
                                "id": Date.now(),
                                "userId": props.id,
                                "authUserId": 3
                            }, {
                                withCredentials: true
                            }).then(response => {
                                props.follow(props.id)
                                props.toggleFollowing(false)
                            })
                        }}>Follow</button>
                    </div>}
            </div>

        </div>
    )
}

export default Friend;