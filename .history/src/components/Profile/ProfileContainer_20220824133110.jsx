import React from 'react';
import { connect } from 'react-redux'
import {  useLocation, useNavigate, useParams } from "react-router-dom"
import {setUserProfile} from '../../redux/profile-reducer'
import axios from 'axios';
import Profile from './Profile';

class ProfileContainer extends React.Component {


    componentDidMount() {
        
        
        let profileId = this.props.router.params.id;
        console.log(this.props);
        if(profileId == undefined) {
            profileId = 3
        }
        axios.get(`http://localhost:3001/users/` + profileId +'?_embed=profile' )
            .then(response => {
                // console.log(response.data, 12);
                this.props.setUserProfile(response.data)
            })
    }

    render() {
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
        userProfile: state.profilePage.userProfile
        
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
    { setUserProfile })(withRouter(ProfileContainer));