import React from 'react';

const NewMassageForm = (props) => {
    return (
        <form className={styles.newMassages}>
            <textarea ref={textMassage} onChange={onMassageChange} value={props.newMassageText} className={styles.newTextMassage}></textarea>
            <button onClick={sandMassage} className='button'>Sand massage</button>
        </form>
    )
}

const NewMassageReduxForm = reduxForm({ form: 'newMassage' })(NewMassageForm)

export default NewMassageReduxForm;