import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Authorization.module.css'

const AuthProfile = (props) => {
    return(
        <>
            <NavLink to='/profile' className={styles.myProfile}>
                <span className={styles.nickname}>{props.login}</span>
        </NavLink>
        </>
    )
}

export default AuthProfile;