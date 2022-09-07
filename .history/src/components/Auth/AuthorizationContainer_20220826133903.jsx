import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import Authorization from './Authorization';
import { setAuthUserData } from '../../redux/auth-reducer';
import AuthProfile from './AuthProfile';

class AuthorizationContainer extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:3001/auth`, {
            withCredentials: true
        })
            .then(response => {
                console.log();
                if (response.data[0].resultCode === 0) {
                    let { id, email, login } = response.data[0].data
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