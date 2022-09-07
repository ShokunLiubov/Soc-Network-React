import React from 'react';
import styles from './Profile_header.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activeEditMode () {
        this.setState({
            editMode: true
        })
    }

    deActiveEditMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
        const profile = this.props.profile
        return (
            <>
            {!this.state.editMode && 
            <span onClick={ this.activeEditMode.bind(this) } className={styles.status}>{profile.status}</span> }
            
            {this.state.editMode && 
            <div className={styles.statusInput}> <input value={profile.status}  /> </div> }
            
            </>
        )
    }
    
}

export default ProfileStatus;