import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './../Community.module.css'

const Friend = (props) => {
    return (
        <div className={styles.friend}>
            <NavLink to={'/community/' + props.id} className={styles.content}>
                <div className={styles.handler}>
                    <img className={styles.communityAva} src={props.ava} />
                    <div className={styles.overlay}></div>

                    {props.followed
                        ? <div className={styles.follow}>
                            <button onClick={() => { props.unFollow(props.id) }}>Unfollow</button>
                        </div>
                        : <div className={styles.follow}>
                            <button onClick={() => { props.follow(props.id) }}>Follow</button>
                        </div>}


                    <div className={styles.goPage}>
                        <button>Go to page</button>
                    </div>

                </div>


                <div className={styles.nickname}>{props.name}</div>
                <div className={styles.personInfo}>
                    <div className={styles.age}>{props.age}</div>
                    <div>•</div>
                    <div className={styles.gender}>{props.gender}</div>
                </div>
            </NavLink>
        </div>
    )
}

export default Friend;