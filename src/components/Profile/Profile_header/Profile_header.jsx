import React from 'react';
import styles from './Profile_header.module.css'

const Profile_header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.background}><img src='images/bcg.jpeg' /></div>
            <div className={styles.content}>
                <div className={styles.ava}><img src='images/ava.png' /></div>
                <div className={styles.description}>
                    <span className={styles.nickname}>Steve Jobs</span>
                    <span className={styles.birth}>February 24, 1955</span>
                    <span className={styles.city}>America</span>
                    <span className={styles.education}>Reed College (attended)</span>
                    <span className={styles.expression}>I will give you a complete account of the system, and expound the actual teachings of the great explorer of human happiness.</span>
                </div>
            </div>
        </div>
    )
}

export default Profile_header;