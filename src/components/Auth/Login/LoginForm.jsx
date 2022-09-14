import React from 'react';
import styles from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { Element } from '../../common/FormsControl/FormsControl';
import { required } from '../../../utils/validators/validators';

const Input = Element("input")

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.username}>
                <label>Username or Email Address</label>
                <Field component={Input} name={'login'} type="text"
                validate={[ required ]} />
            </div>
            <div className={styles.password}>
                <label>Password</label>
                <Field component={Input} name={'password'} type="password"
                validate={[ required ]} />
            </div>
            <div className={styles.buttonLogin}>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm;