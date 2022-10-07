import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthorizationContainer from '../Auth/AuthorizationContainer';
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            {/* LOGO */}
            <div className={styles.logo}><img src='./images/logotype.png' /></div>
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
                    <NavLink to='/friends' className={navData => navData.isActive ? styles.active : styles.item}>My friends</NavLink>
                </div>
                <div to='/dialogs' className={styles.item}>
                    <NavLink to='/dialogs' className={navData => navData.isActive ? styles.active : styles.item}>Massages</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/music' className={navData => navData.isActive ? styles.active : styles.item}>Music</NavLink>
                </div>
            </nav>
            <div className={styles.menuBurger}>
                <span></span>
            </div>
            {/* MENU */}

            {/* Authorization */}
            <AuthorizationContainer />
            {/* Authorization */}

        </div>
    )
}

export default Navbar;