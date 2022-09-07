import React from 'react';
import styles from './Profile_header.module.css'

class ProfileStatus extends React.Component {
    status = this.props.status
    state = {
        editMode: false,
        status: status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUsersStatus()
    }

    render() {
        return (
            <>
            {!this.state.editMode && 
            <span onClick={ this.activeEditMode } className={styles.status}>{status}</span> }
            
            {this.state.editMode && 
            <div className={styles.statusInput}> <input autoFocus={true} onBlur={ this.deActiveEditMode } value={status}  /> </div> }
            
            </>
        )
    }
    
}

export default ProfileStatus;