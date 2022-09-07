import React from 'react';
import { connect } from 'react-redux'
import {  useLocation, useNavigate, useParams } from "react-router-dom"
import {getUserProfile, getUserStatus, updateUsersStatus} from '../../redux/profile-reducer'
import Profile from './Profile';
import { Navigate } from 'react-router-dom';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';

class ProfileContainer extends React.Component {


    componentDidMount() {  
        let profileId = this.props.router.params.id;
        if(!profileId) {
            profileId = 3
        }
        this.props.getUserProfile(profileId)
        this.props.getUserStatus(profileId)

    }
    

    render() {
        return (
            <div>
                <Profile {...this.props } 
                userProfileData={this.props.userProfile}
                status={this.props.status}
                updateUsersStatus={this.props.updateUsersStatus} />
                
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps,{ getUserProfile, getUserStatus, updateUsersStatus }),
    withRouter,
    withAuthNavigate
)(ProfileContainer);