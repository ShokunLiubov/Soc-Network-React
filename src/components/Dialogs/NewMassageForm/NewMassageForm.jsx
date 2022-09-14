import React from 'react';
import styles from './../Dialogs.module.css'
import { Field, reduxForm } from 'redux-form'
import { Element } from '../../common/FormsControl/FormsControl';
import { required, maxLengthCreator } from '../../../utils/validators/validators';

const maxLength = maxLengthCreator(300)
const Textarea = Element("textarea")

const NewMassageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={styles.newMassages}>
            <Field component={Textarea} name='newMassageText' className={styles.newTextMassage}
            validate={[ required, maxLength ]} />
            <button className='button'>Sand massage</button>
        </form>
    )
}

const NewMassageReduxForm = reduxForm({ form: 'newMassage' })(NewMassageForm)

export default NewMassageReduxForm;