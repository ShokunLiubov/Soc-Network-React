import React from 'react';
import styles from './Profile_header.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: true
    }

    render() {
        const profile = this.props.profile
        return (
            <>
            {!this.state.editMode && 
            <span className={styles.status}>{profile.status}</span> }
            
            {this.state.editMode && 
            <div className={styles.statusInput}> <input value={profile.status}  /> </div> }
            
            </>
        )
    }
    
}

export default ProfileStatus;