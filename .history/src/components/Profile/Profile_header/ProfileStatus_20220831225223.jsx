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
            <div> <input value={profile.status} className={styles.statusInput} /> </div> }
            
            </>
        )
    }
    
}

export default ProfileStatus;