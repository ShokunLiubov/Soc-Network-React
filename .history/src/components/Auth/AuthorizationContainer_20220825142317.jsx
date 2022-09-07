import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import Authorization from './Authorization';
import { setAuthUserData } from '../../redux/auth-reducer';

class AuthorizationContainer extends React.Component {

    componentDidMount() {
        // this.props.toggleFetching(true)
        axios.get(`http://localhost:3001/auth/1`, {
            withCredentials: true
        } )
            .then(response => {
                console.log(response.data.data, 12);
                // this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Authorization {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({})

export default connect(mapStateToProps,
    { setAuthUserData })(AuthorizationContainer)