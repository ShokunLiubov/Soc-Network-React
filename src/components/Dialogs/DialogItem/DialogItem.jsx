import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <NavLink to={'/dialogs/' + props.id} className={styles.nickname}>
                <img className={styles.dialogAva} src={props.ava} />
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;