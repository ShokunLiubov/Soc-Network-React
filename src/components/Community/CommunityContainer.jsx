import React from 'react';
import { connect } from 'react-redux'
import { requestUsers, getUsersOnPage } from '../../redux/community-reducer';
import Community from './Community';
import Preloader from '../common/Preloader/Preloader';
import { follow, unFollow } from '../../redux/community-reducer';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsFollowing, getAuthUserId } from '../../redux/users-selectors';

class CommunityContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPag, this.props.pageSize )
    }

    onPageClick = (page) => {
        this.props.getUsersOnPage( page, this.props.pageSize)
    } 
    

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Community userData={this.props.userData}     
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageClick={this.onPageClick}
                    isFetching={this.props.isFetching}
                    isFollowing={this.props.isFollowing}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    authUserId={this.props.authUserId}
                />
            </>
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         userData: state.communityPage.userData,
//         pageSize: state.communityPage.pageSize,
//         totalUsersCount: state.communityPage.totalUsersCount,
//         currentPage: state.communityPage.currentPage,
//         isFetching: state.communityPage.isFetching,
//         isFollowing: state.communityPage.isFollowing,
//         userId: state.auth.userId
//     }
// } 

let mapStateToProps = (state) => {
    return {
        userData: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
        authUserId: getAuthUserId(state)
    }
}



export default compose(
    connect(mapStateToProps, { requestUsers, getUsersOnPage, follow, unFollow })
)(CommunityContainer)
