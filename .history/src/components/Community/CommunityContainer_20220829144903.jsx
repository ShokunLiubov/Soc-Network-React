import React from 'react';
import { connect } from 'react-redux'
import { getUsers, getUsersOnPage } from '../../redux/community-reducer';
import Community from './Community';
import Preloader from '../common/Preloader/Preloader';

class CommunityContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPag, this.props.pageSize)
    }

    onPageClick = (page) => {
        this.props.getUsersOnPage( page, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Community userData={this.props.userData}     
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageClick={this.onPageClick}
                    isFetching={this.props.isFetching}
                    toggleFollowing={this.props.toggleFollowing}
                    isFollowing={this.props.isFollowing}
                />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        userData: state.communityPage.userData,
        pageSize: state.communityPage.pageSize,
        totalUsersCount: state.communityPage.totalUsersCount,
        currentPage: state.communityPage.currentPage,
        isFetching: state.communityPage.isFetching,
        isFollowing: state.communityPage.isFollowing,
    }
}

export default connect(mapStateToProps,
    { getUsers, getUsersOnPage,  })(CommunityContainer)
