import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import Authorization from './Authorization';
import { setAuthUserData, setUserProfile } from '../../redux/auth-reducer';
import AuthProfile from './AuthProfile';

class AuthorizationContainer extends React.Component {

    componentDidMount() {
        // this.props.toggleFetching(true)
        axios.get(`http://localhost:3001/users/3` + '?_embed=auth')
        .then(response => {
            console.log(response.data.auth[0].data, 12);
            this.props.setUserProfile(response.data)
        })


        // axios.get(`http://localhost:3001/auth/1`, {
        //     withCredentials: true
        // })
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let { id, email, login } = response.data.data
        //             this.props.setAuthUserData(id, email, login)
        //         }
        //     })
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
        userProfile: state.auth.userProfile
    }
}

export default connect(mapStateToProps,
    { setAuthUserData, setUserProfile })(AuthorizationContainer)