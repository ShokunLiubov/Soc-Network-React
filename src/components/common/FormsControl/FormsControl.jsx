import React from 'react';
import styles from './FormsControl.module.css'

export const Element = Element => ({ input, meta: {touched, error}, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={`${styles.formControl} ${hasError && styles.error}`}>
            {hasError && <div className={styles.textError}><span>{error}</span></div>}
            <Element {...input} {...props} />
        </div>
    );
};