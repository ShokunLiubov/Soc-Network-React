import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './../Community.module.scss'
import Follow from './Follow';

const Friend = (props) => {

    let authProfile = props.authUserId === props.id

    return (
        <div className={styles.friend}>

            <NavLink to={'/profile/' + props.id} className={styles.avatar}>
                <img className={styles.communityAva} src={props.ava != null ? props.ava : './images/ava-woman.png'} />
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

                {authProfile ||
                    <Follow
                        follow={props.follow} unFollow={props.unFollow}
                        isFollowing={props.isFollowing}
                        id={props.id}
                        followed={props.followed}
                        followedId={props.followedId} />}

                {authProfile &&
                    <>
                        <span className={styles.meProfileName}>Me Profile</span>
                        <span className={styles.meProfile}></span>
                    </>
                }
            </div>

        </div>
    )
}

export default Friend;