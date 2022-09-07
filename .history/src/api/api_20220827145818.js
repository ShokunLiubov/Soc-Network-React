import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/'
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?_page=${currentPage}&_limit=${pageSize}`).then(

            response => {
                const followed = Promise.all(response.data.map(async (user) => {
                    let follow = await instance.get(`follow?userId=${user.id}&authUserId=3`)
                    let isFollow = (follow.data[0]) ? true : false;
                    user.followed = isFollow
                    user.followedId = isFollow ? follow.data[0].id : ''
                    return user
                }))
                return followed
            }
        )
    },
    getAuth() {
        return instance.get('auth/1').then(response => response.data)
    },
    getUserProfile(profileId) {
        return instance.get('users/' + profileId + '?_embed=profile').then(response => response.data)
    },
    postFollow() {
        return instance.post('follow', {
            "id": Date.now(),
            "userId": props.id,
            "authUserId": 3
        }).then(response => response)
    }
}


