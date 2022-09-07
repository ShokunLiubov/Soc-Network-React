import React from 'react';
// import styles from './Registration.module.css'

const Authorization = () => {
    return(
        <NavLink to='/login' className={styles.login}>
                <button className='button'>Login</button>
        </NavLink>
    )
}

export default Authorization;