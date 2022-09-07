import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

class AutorisationContainer extends React.Component {
    render() {
        return (
            <div>

            </div>
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
    { follow, unFollow, setUsers, setPage, setUsersTotalCount, toggleFetching })(AutorisationContainer)