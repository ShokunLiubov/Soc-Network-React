import React from 'react';
import { connect } from 'react-redux'
import { follow, setUsers, unFollow, setPage, setUsersTotalCount, toggleFetching } from '../../redux/community-reducer';
import Community from './Community';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class CommunityContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true)
        
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleFetching(false)
                this.props.setUsers(data)
                this.props.setUsersTotalCount(20)
                
            })
    }

    onPageClick = (page) => {

        this.props.setPage(page)
        this.props.toggleFetching(true)
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false)
                this.props.setUsers(data)
            })
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
    { follow, unFollow, setUsers, setPage, setUsersTotalCount, toggleFetching })(CommunityContainer)
