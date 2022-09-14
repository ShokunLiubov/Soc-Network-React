import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { login } from '../../../redux/auth-reducer';
import ProfileContainer from '../../Profile/ProfileContainer';
import styles from './Login.module.css'
import LoginReduxForm from './LoginForm';

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.login, formData.password );
    }

    if(props.isAuth) {
        return (
        <Routes>
            <Route path='/profile/*' element={<ProfileContainer />} />
        </Routes> 
        )}

    return (
        <div className={styles.background}>
            <div className={styles.registration}>
                <div className={styles.title}>Find your<br />
                    <i>Life partner.</i></div>
                <p className={styles.excerption}>Researching the soul mate is something difficult. Gwangi offers you the opportunity to simply accelerate the process by finding your life partner.</p>

                <LoginReduxForm onSubmit={onSubmit} />

                <div className={styles.decorationGrey}></div>
                <div className={styles.decorationWhite}></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);