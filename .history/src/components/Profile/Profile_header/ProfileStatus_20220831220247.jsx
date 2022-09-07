import React from 'react';
import styles from './Profile_header.module.css'

const ProfileStatus = (props) => {
    return (
        <span className={styles.status}>{props.profile.status}</span>
    )
}

export default ProfileStatus;