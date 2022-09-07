import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import Authorization from './Authorization';
import { setAuthUserData } from '../../redux/auth-reducer';
import AuthProfile from './AuthProfile';
import { usersAPI } from '../../api/api';

class AuthorizationContainer extends React.Component {

    componentDidMount() {
        usersAPI.getAuth().then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <>
                {this.props.isAuth &&
                    <AuthProfile {...this.props} />}
                {!this.props.isAuth &&
                    <Authorization {...this.props} />}
            </>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        myUserProfile: state.auth.myUserProfile
    }
}

export default connect(mapStateToProps,
    { setAuthUserData })(AuthorizationContainer)