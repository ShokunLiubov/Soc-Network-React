import React from 'react';
import { connect } from 'react-redux'
import Authorization from './Authorization';
import { getAuth } from '../../redux/auth-reducer';
import AuthProfile from './AuthProfile';

class AuthorizationContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth()

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
    { getAuth })(AuthorizationContainer)