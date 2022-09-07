import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import Authorization from './Authorization';

class AuthorizationContainer extends React.Component {

    componentDidMount() {
        // this.props.toggleFetching(true)
        axios.get(`http://localhost:3001/users/` + profileId +'?_embed=profile' )
            .then(response => {
                this.props.setUserProfile(response.data)
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
    { })(AuthorizationContainer)