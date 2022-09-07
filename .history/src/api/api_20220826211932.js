import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/'
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?_page=${currentPage}&_limit=${pageSize}`).then(

            response => {
                const followed = Promise.all(response.data.map(async (r) => {
                    let follow = await instance.get(`follow?userId=${r.id}&authUserId=3`)
                    let isFollow = (follow.data[0]) ? true : false;
                    r.followed = isFollow

                    return r
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
    }
}


