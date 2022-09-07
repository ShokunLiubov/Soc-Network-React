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
                        <button onClick={() => {
                            axios.delete(`http://localhost:3001/follow/100?userId=${props.id}`, {
                                withCredentials: true
                            }).then(response =>  props.unFollow(props.id))

                        }}>Unfollow</button>
                    </div>
                    : <div className={styles.follow}>

                        <button onClick={() => {
                            axios.post(`http://localhost:3001/follow`, {
                                "id": Math.random(),
                                "userId": props.id,
                                "authUserId": 3
                            }, {
                                withCredentials: true
                            }).then(response => {
                                props.follow(props.id)
                            })
                        }}>Follow</button>
                    </div>}
            </div>

        </div>
    )
}

export default Friend;