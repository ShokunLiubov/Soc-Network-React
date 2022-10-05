import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './Profile_header.module.css'

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode ] = useState(false)
    let [status, setStatus ] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [ props.status ])

    const activeEditMode = () => {
        setEditMode(true)
    }

    const deActiveEditMode = () => {
        setEditMode(false)
        props.updateUsersStatus(status, props.profileId)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    
    return (
        <>
        {!editMode && 
        <span onClick={ activeEditMode }  className={styles.status}>{props.status ? props.status : "This status"}</span> }
        
        { editMode && 
        <div className={styles.statusInput}> <input autoFocus={true}
            onChange={ onStatusChange }
            onBlur={ deActiveEditMode }
            value={ status }  /> </div> }
        
        </>
    )

}

export default ProfileStatusHooks;