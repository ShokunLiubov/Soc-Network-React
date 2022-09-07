import React from 'react';
import styles from './Registration.module.css'

const Registration = () => {
    return (
        <div className={styles.background}>
            <div className={styles.registration}>
                <div className={styles.title}>Find your<br />
                    <i>Life partner.</i></div>
                <p className={styles.excerption}>Researching the soul mate is something difficult. Gwangi offers you the opportunity to simply accelerate the process by finding your life partner.</p>
                <form>
                    <div className={styles.username}>
                        <label>Username or Email Address</label>
                        <input type="text"/>
                    </div>
                    <div className={styles.password}>
                        <label>Password</label>
                        <input type="password"/>
                    </div>
                    <div className={styles.buttonLogin}>
                    <span>Log in</span>
                    </div>
                    
                </form>
            </div>

            <div className={styles.decorationGrey}></div>
                    <div className={styles.decorationWhite}></div>

        </div>
    )
}

export default Registration;