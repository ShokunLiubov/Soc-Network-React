import React from 'react';
import styles from './Login.module.css'
import LoginReduxForm from './LoginForm';

const Login = (props) => {
    return (
        <div className={styles.background}>
            <div className={styles.registration}>
                <div className={styles.title}>Find your<br />
                    <i>Life partner.</i></div>
                <p className={styles.excerption}>Researching the soul mate is something difficult. Gwangi offers you the opportunity to simply accelerate the process by finding your life partner.</p>

                <LoginReduxForm />

                <div className={styles.decorationGrey}></div>
                <div className={styles.decorationWhite}></div>
            </div>
        </div>
    )
}

export default Login;