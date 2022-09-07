import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            {/* LOGO */}
            <div className={styles.logo}><img src='./../images/logotype.png' /></div>
             {/* LOGO */}

            {/* MENU */}
            <nav className={styles.menu}>
                <div className={styles.item}>
                    <NavLink to='/home' className={navData => navData.isActive ? styles.active : styles.item}>Home</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/community' className={navData => navData.isActive ? styles.active : styles.item}>Community</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/profile' className={navData => navData.isActive ? styles.active : styles.item}>My profile</NavLink>
                </div>
                <div to='/dialogs' className={styles.item}>
                    <NavLink to='/dialogs' className={navData => navData.isActive ? styles.active : styles.item}>Massages</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/music' className={navData => navData.isActive ? styles.active : styles.item}>Music</NavLink>
                </div>
            </nav>
            {/* MENU */}

            {/* LOGIN */}
            <NavLink to='/login' className={styles.login}>
                <button className='button'>Login</button>
            </NavLink>
            {/* LOGIN */}

        </div>
    )
}

export default Navbar;