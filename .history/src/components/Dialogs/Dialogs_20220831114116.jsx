import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import Massage from './Massage/Massage';
// import NewMassage from './NewMassage/NewMassage';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(
        dialog =>
            <DialogItem ava={dialog.ava} name={dialog.name} key={dialog.id} />
    )

    let massagesElement = props.massagesData.map(
        massage =>
            <Massage key={massage.id} massage={massage.massage} />
    )

    let textMassage = React.createRef()

    let sandMassage = () => {
        props.sandMassage()
    }

    let onMassageChange = () => {
        let text = textMassage.current.value
        props.onMassageChange(text)
    }

    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.blockMassages}>
                    <div className={styles.massages}>
                        {massagesElement}
                    </div>
                    <div className={styles.newMassages}>
                        <textarea ref={textMassage} onChange={onMassageChange} value={props.newMassageText} className={styles.newTextMassage}></textarea>
                        <button onClick={sandMassage} className='button'>Sand massage</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;