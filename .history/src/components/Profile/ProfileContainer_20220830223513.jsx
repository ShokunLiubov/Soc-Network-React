import React from 'react';
import { connect } from 'react-redux'
import {  useLocation, useNavigate, useParams } from "react-router-dom"
import {getUserProfile} from '../../redux/profile-reducer'
import Profile from './Profile';
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component {


    componentDidMount() {  
        let profileId = this.props.router.params.id;
        if(!profileId) {
            profileId = 3
        }
        this.props.getUserProfile(profileId)
    }

    render() {
        if(this.props.isAuth === false) return <Navigate to={'/login/'} />
        return (
            <div>
                <Profile {...this.props } 
                userProfileData={this.props.userProfile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth
    }
}

// let WithUrlDataContainerComponent = withRouter(ProfileContainer)

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

export default connect(mapStateToProps,
    { getUserProfile })(withRouter(ProfileContainer));