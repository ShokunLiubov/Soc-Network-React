import React from 'react';
import styles from './Profile_header.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateUsersStatus(this.state.status, this.props.profileId)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        }) 
    }

    render() {
        return (
            <>
            {!this.state.editMode && 
            <span onClick={ this.activeEditMode } className={styles.status}>{this.props.status ? this.props.status : "This status"}</span> }
            
            {this.state.editMode && 
            <div className={styles.statusInput}> <input autoFocus={true}
            onChange={this.onStatusChange}
            onBlur={ this.deActiveEditMode } value={''}  /> </div> }
            
            </>
        )
    }
    
}

export default ProfileStatus;