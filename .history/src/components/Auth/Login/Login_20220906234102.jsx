import React from 'react';
import styles from './Login.module.css'
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div className={styles.background}>
            <div className={styles.registration}>
                <div className={styles.title}>Find your<br />
                    <i>Life partner.</i></div>
                <p className={styles.excerption}>Researching the soul mate is something difficult. Gwangi offers you the opportunity to simply accelerate the process by finding your life partner.</p>
                <LoginForm />
                <div className={styles.decorationGrey}></div>
                <div className={styles.decorationWhite}></div>
            </div>
            {/* <div className={styles.decoration}> */}
            {/* </div> */}

        </div>
    )
}

export default Login;