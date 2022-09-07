import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import styles from './Community.module.css'
import Friend from './Friend/Friend';

const Community = (props) => {

    let usersElement = props.userData.map(
        user =>
            <Friend followedId={props.userData.followedId} followed={user.followed} ava={user.ava} name={user.name}
                key={user.id} id={user.id} age={user.age} gender={user.gender}
                follow={props.follow} unFollow={props.unFollow} />
    )

    return (
        <div className={styles.container}>
            <div className={styles.topPanel}>
                <div className={styles.search}>
                    <span className={styles.searchButton}><img src="./../images/search.png" alt="" /></span>
                    <input className={styles.searchInput} />
                </div>

                {/* <button onClick={getUsers}>Get user</button> */}

                <span className={styles.filter}><img src="./../images/filter-icon.png" alt="" /></span>
            </div>

            <div className={styles.friends}>

                {usersElement}
            </div>

            <Paginator 
            currentPage={props.currentPage}
            onPageChange={props.onPageClick}
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}/>
        </div>
    )
}

export default Community;