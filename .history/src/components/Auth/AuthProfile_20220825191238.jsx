import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Authorization.module.css'

const AuthProfile = (props) => {
    return(
        <>
            <NavLink to='/profile'>
                <span>{props.login}</span>
        </NavLink>
        </>
    )
}

export default AuthProfile;