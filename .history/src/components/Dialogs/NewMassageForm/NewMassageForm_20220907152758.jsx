import React from 'react';
import styles from './../Dialogs.module.css'

const NewMassageForm = (props) => {

    let textMassage = React.createRef()

    let sandMassage = () => {
        props.sandMassage()
    }

    let onMassageChange = () => {
        let text = textMassage.current.value
        props.onMassageChange(text)
    }

    return (
        <form className={styles.newMassages}>
            <textarea ref={textMassage} onChange={onMassageChange} value={props.newMassageText} className={styles.newTextMassage}></textarea>
            <button onClick={sandMassage} className='button'>Sand massage</button>
        </form>
    )
}

const NewMassageReduxForm = reduxForm({ form: 'newMassage' })(NewMassageForm)

export default NewMassageReduxForm;