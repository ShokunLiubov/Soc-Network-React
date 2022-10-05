import React from 'react';
import { connect } from 'react-redux'
import { getUserProfile, getUserStatus, updateUsersStatus } from '../../redux/profile-reducer'
import Profile from './Profile';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.id;
        if (!profileId) {
            profileId = this.props.userId
            if (!profileId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(profileId)
        this.props.getUserStatus(profileId)
    }


    render() {
        return (
            <div>
                <Profile {...this.props}
                    userProfileData={this.props.userProfile}
                    status={this.props.status}
                    updateUsersStatus={this.props.updateUsersStatus}
                    profileId={this.props.router.params.id} />

            </div>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        userId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUsersStatus }),
    withRouter,
    withAuthNavigate
)(ProfileContainer);