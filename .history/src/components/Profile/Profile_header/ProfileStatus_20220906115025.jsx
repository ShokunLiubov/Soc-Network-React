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

    inputChangedHandler = (event) => {
        const updatedKeyword = event.target.value;
        // May be call for search result
    }

    render() {
        const status = this.props.status
        return (
            <>
            {!this.state.editMode && 
            <span onClick={ this.activeEditMode } className={styles.status}>{status}</span> }
            
            {this.state.editMode && 
            <div className={styles.statusInput}> <input autoFocus={true} onBlur={ this.deActiveEditMode } value={status}
            onChange={(event)=>this.inputChangedHandler(event)}  /> </div> }
            
            </>
        )
    }
    
}

export default ProfileStatus;