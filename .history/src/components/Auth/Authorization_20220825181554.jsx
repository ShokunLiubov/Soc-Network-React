import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Authorization.module.css'

const Authorization = () => {
    return(
        <>
        { props.isAuth ? props.login :
            <NavLink to='/login' className={styles.login}>
                <button className='button'>Login</button>
        </NavLink>}
        </>
    )
}

export default Authorization;