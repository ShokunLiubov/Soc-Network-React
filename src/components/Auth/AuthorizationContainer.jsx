import React from 'react';
import { connect } from 'react-redux'
import Authorization from './Authorization';
import { logOut } from '../../redux/auth-reducer';
import AuthProfile from './AuthProfile';
import { compose } from 'redux';

class AuthorizationContainer extends React.Component {

    // componentDidMount() {
    //     this.props.getAuthUserData()
    // }

    render() {
        return (
            <>
                {this.props.isAuth &&
                    <AuthProfile {...this.props}
                        authUser={this.props.authUser} />}
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
        myUserProfile: state.auth.myUserProfile,
        authUser: state.auth.userId
    }
}



export default compose(
    connect(mapStateToProps, { logOut })
)(AuthorizationContainer)