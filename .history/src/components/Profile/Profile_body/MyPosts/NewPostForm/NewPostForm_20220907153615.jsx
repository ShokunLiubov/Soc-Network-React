import React from 'react';
import styles from './../MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'

const NewPostForm = (props) => {

    // let newPostElement = React.createRef()

    // let addPost = () => {
    //     props.addPost()
    // }

    // let onPostChange = () => {
    //     let text = newPostElement.current.value
    //     props.updateNewPostText(text)
    // }

    return (
        <form onSubmit={props.handleSubmit}>
            <label className={styles.namePost}>New post</label>
            <div className={styles.newPost}>
                <Field component={"textarea"} name={'newPostText'} className={styles.newPostText} />
                <button className='button'>Add post</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)

export default NewPostReduxForm;