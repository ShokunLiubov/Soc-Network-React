import axios from 'axios';

const serverUrl = 'http://localhost:3001/'

export const getUsers = (currentPage, pageSize) => {
    return axios.get( serverUrl + `users?_page=${currentPage}&_limit=${pageSize}`).then(response => response.data)
}
