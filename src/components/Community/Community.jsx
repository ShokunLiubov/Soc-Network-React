import React from 'react';
import styles from './Community.module.css'
import Friend from './Friend/Friend';

const Community = (props) => {
    if(props.userData.length === 0) {
        props.setUsers([
            { id: 1, followed: false, name: 'Vika', ava: './../images/ava-w1.jpeg', age: '29', gender: 'Female' },
            { id: 2, followed: false, name: 'Eugen', ava: './../images/ava-m2.png', age: '29', gender: 'Male' },
            { id: 3, followed: true, name: 'Liubov', ava: './../images/ava-w3.jpeg', age: '23', gender: 'Female' },
            { id: 4, followed: false, name: 'Max', ava: './../images/ava-m1.jpeg', age: '51', gender: 'Male' },
            { id: 5, followed: false, name: 'Nika', ava: './../images/ava-w2.webp', age: '18', gender: 'Female' },
            { id: 6, followed: true, name: 'Vika', ava: './../images/ava-w1.jpeg', age: '12', gender: 'Female' },
            { id: 7, followed: false, name: 'Eugen', ava: './../images/ava-m2.png', age: '19', gender: 'Male' },
            { id: 8, followed: true, name: 'Liubov', ava: './../images/ava-w3.jpeg', age: '32', gender: 'Female' },
            { id: 9, followed: false, name: 'Max', ava: './../images/ava-m1.jpeg', age: '26', gender: 'Male' },
            { id: 10, followed: true, name: 'Nika', ava: './../images/ava-w2.webp', age: '21', gender: 'Female' }
        ])
    }
    
    let usersElement = props.userData.map(
        user =>
            <Friend followed={user.followed} ava={user.ava} name={user.name} 
            key={user.id} id={user.id} age={user.age} gender={user.gender} 
            follow={props.follow} unFollow={props.unFollow} />
    )

    return (
        <div className={styles.container}>
            <div className={styles.topPanel}>
                <div className={styles.search}>search</div>
                <div className={styles.filter}>filter</div>
            </div>

            <div className={styles.friends}>
                {usersElement}
            </div>
        </div>
    )
}

export default Community;