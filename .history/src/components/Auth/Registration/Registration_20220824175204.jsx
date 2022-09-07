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
                    <div>
                        <label for="name">Name: </label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label for="pwd">Archetype: </label>
                        <input type="password"/>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Registration;