import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/'
})

export const usersAPI = {
    getUsers(currentPage, pageSize){
        // let res1 = await instance.get(`users?_page=${currentPage}&_limit=${pageSize}`)
        // async function editFollow(res1){
        //     res1.data.map(r=>{
        //         let res2 = await instance.get(`follow?userId=${r.id}&authUserId=3`)
        //         console.log(res2)
        //     })
        // }
        // console.log(res1.data);
        return instance.get(`users?_page=${currentPage}&_limit=${pageSize}`).then(
            
                 response => {
                    const res = Promise.all(response.data.map(async (r)=>{
                        let follow = await instance.get(`follow?userId=${r.id}&authUserId=3`)
                        let isFollow = (follow.data[0]) ? true : false;
                        r.followed = isFollow
                        //console.log(r)
                        return r
                    }))
                    
                    //  console.log(res);
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


