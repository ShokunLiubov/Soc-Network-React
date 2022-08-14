import React from 'react';
import Community from './Community';
import { connect } from 'react-redux'
import { followAC, setUsersAC, unFollowAC } from '../../redux/community-reducer';


let mapStateToProps = (state) => {
    return {
        userData: state.communityPage.userData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            let action = followAC(userID)
            dispatch(action)
        },
        unFollow: (userID) => {
            let action = unFollowAC(userID)
            dispatch(action)
        },
        setUsers: (users) => {
            let action = setUsersAC(users)
            dispatch(action)
        }
    }
}

const CommunityContainer = connect(mapStateToProps, mapDispatchToProps)(Community)

export default CommunityContainer;