import React from 'react';
import { connect } from 'react-redux'
import { follow, setUsers, unFollow, setPage, setUsersTotalCount, toggleFetching } from '../../redux/community-reducer';
import axios from 'axios';
import Community from './Community';
import Preloader from '../common/Preloader/Preloader';

class CommunityContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`http://localhost:3001/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
            .then(response => {
                // console.log(response);
                this.props.toggleFetching(false)
                this.props.setUsers(response.data)
                this.props.setUsersTotalCount(20)
                
            })
    }

    onPageClick = (page) => {

        this.props.setPage(page)
        this.props.toggleFetching(true)
        axios.get(`http://localhost:3001/users?_page=${page}&_limit=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data)
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
        isFetching: state.communityPage.isFetching
    }
}

export default connect(mapStateToProps,
    { follow, unFollow, setUsers, setPage, setUsersTotalCount, toggleFetching })(CommunityContainer)
