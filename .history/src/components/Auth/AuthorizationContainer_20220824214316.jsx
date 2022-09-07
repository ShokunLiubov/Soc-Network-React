import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import Authorization from './Authorization';

class AuthorizationContainer extends React.Component {
    render() {
        return (
            <Authorization />
        )
    }
}

let mapStateToProps = (state) => ({})

export default connect(mapStateToProps,
    { })(AuthorizationContainer)