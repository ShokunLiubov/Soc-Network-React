import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/'
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?_page=${currentPage}&_limit=${pageSize}`).then(
            
            async response => {

                    //console.log(response.data)
                    const res = response.data.map((r)=>{
                        
                        let follow = await instance.get(`follow?userId=${r.id}&authUserId=3`)
                        console.log('====================================');
                        console.log(follow);
                        console.log('====================================');
return r
                    })
                    console.log(res);
                    return res
                

                //response.data
            }
            )
    },
    getAuth() {
        return instance.get('auth/1').then(response => response.data)
    },
    getUserProfile(profileId) {
        return instance.get('users/' + profileId + '?_embed=profile' ).then(response => response.data)
    }
}


