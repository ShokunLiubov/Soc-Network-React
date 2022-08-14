import React from 'react';
import styles from './../Dialogs.module.css'

const Massage = (props) => {
    return (
        <div>
            <div className={styles.massageGet}>
                <div className={styles.massage}>{props.massage}</div>
            </div>
            <div className={styles.massageSend}>
                <div className={styles.massage}>{props.massage}</div>
            </div>
        </div>
    )
}

export default Massage;