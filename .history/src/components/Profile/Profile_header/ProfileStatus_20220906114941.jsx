import React from 'react';
import styles from './Profile_header.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
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
    }

    render() {
        const status = this.props.status
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