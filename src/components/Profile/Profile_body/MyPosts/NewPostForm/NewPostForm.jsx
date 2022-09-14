import React from 'react';
import styles from './../MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../../../utils/validators/validators';
import { Element } from '../../../../common/FormsControl/FormsControl';

const maxLength = maxLengthCreator(300)
const Textarea = Element("textarea")

const NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <label className={styles.namePost}>New post</label>
            <div className={styles.newPost}>
                <Field component={Textarea} name={'newPostText'} className={styles.newPostText}
                validate={[ required, maxLength ]} />
                <button className='button'>Add post</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)

export default NewPostReduxForm;