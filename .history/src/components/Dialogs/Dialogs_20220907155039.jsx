import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import Massage from './Massage/Massage';
import NewMassageReduxForm from './NewMassageForm/NewMassageForm';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(
        dialog =>
            <DialogItem ava={dialog.ava} name={dialog.name} key={dialog.id} />
    )

    let massagesElement = props.massagesData.map(
        massage =>
            <Massage key={massage.id} massage={massage.massage} />
    )

    let addNewMassage = (value) => {
        alert(value.newMassageText)
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

                    <NewMassageReduxForm onSubmit={addNewMassage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;