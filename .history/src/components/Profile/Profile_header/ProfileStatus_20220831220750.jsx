import React from 'react';
import styles from './Profile_header.module.css'

const ProfileStatus = (props) => {
    return (
        <>
        <span className={styles.status}>{props.profile.status}</span>
        <div> <input value={props.profile.status} /> </div>
        </>
    )
}

export default ProfileStatus;