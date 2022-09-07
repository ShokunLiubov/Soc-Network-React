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
    postFollow(id) {
        return instance.post('follow', {
            "id": Date.now(),
            "userId": id,
            "authUserId": 3
        })
    },
    deleteUnFollow(followedId) {
        return instance.delete(`follow/${followedId}`)
    }
}

export const profileAPI = {
    getUserProfile(profileId) {
        return instance.get('users/' + profileId + '?_embed=profile').then(response => response.data)
    },
    getStatusProfile(profileId) {
        return instance.get('users/' + profileId + '?_embed=profile').then(response => response.data.profile[0].status)
    },
    updateStatusProfile(status, userId) {
        return instance.put('users/' + userId + '?_embed=profile', {"status": status}).then(response => response.data.profile[0].status)
    }
}

export const usersAuth = {
    getAuth() {
        return instance.get('auth/1').then(response => response.data)
    },
}


