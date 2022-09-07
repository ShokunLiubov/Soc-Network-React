import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Authorization.module.css'

const AuthProfile = (props) => {

    let user = props.userProfile

    return (
        <>
            <NavLink to='/profile' className={styles.myProfile}>
                <span className={styles.nickname}>{props.login}</span>
                <img src={userProfile.ava} alt="" />
            </NavLink>
        </>
    )
}

export default AuthProfile;