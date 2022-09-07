import React from 'react';
import styles from './../Dialogs.module.css'
import { Field, reduxForm } from 'redux-form'

const NewMassageForm = (props) => {

    // let textMassage = React.createRef()

    // let sandMassage = () => {
    //     props.sandMassage()
    // }

    // let onMassageChange = () => {
    //     let text = textMassage.current.value
    //     props.onMassageChange(text)
    // }

    return (
        <form onSubmit={props.handleSubmit} className={styles.newMassages}>
            <Field component={"textarea"} name='newMassageText' className={styles.newTextMassage}/>
            {/* <textarea ref={textMassage} onChange={onMassageChange} value={props.newMassageText} className={styles.newTextMassage}></textarea> */}
            <button className='button'>Sand massage</button>
        </form>
    )
}

const NewMassageReduxForm = reduxForm({ form: 'newMassage' })(NewMassageForm)

export default NewMassageReduxForm;