import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './Profile_header.module.css'

const Profile_header = (props) => {
    
    // let userProfile = props.userProfile

    let user = props.userProfile
    
    let profile = (user.profile != undefined) ? user.profile[0] : {}
    console.log(user);
    if(!user) {
        return <Preloader />
    }
    return (
            <div>
                <div className={styles.header}>
                <div className={styles.background}><img src={profile.backgroundImg != undefined ? profile.backgroundImg : './../images/bcg.jpeg'} /></div>
                <div className={styles.content}>
                    <div className={styles.ava}><img src={user.ava != undefined ? user.ava : './../images/ava-woman.png'} /></div>
                    <div className={styles.description}>
                        <span className={styles.nickname}>{user.name}</span>
                        <span className={styles.birth}>{profile.birth}</span>
                        <span className={styles.city}>{profile.city}</span>
                        <span className={styles.education}>{profile.education}</span>
                        <span className={styles.status}>{profile.status}</span>
                    </div>
                </div>
            </div>
            </div>   
    )
}

export default Profile_header;