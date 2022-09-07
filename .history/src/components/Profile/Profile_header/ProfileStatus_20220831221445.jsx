import React from 'react';
import styles from './Profile_header.module.css'

class ProfileStatus extends React.Component {

    
    render() {
        const profile = props.profile
        return (
            <>
            <span className={styles.status}>{profile.status}</span>
            <div> <input value={profile.status} /> </div>
            </>
        )
    }
    
}

export default ProfileStatus;