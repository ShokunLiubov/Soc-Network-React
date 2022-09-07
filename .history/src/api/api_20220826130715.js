import axios from 'axios';

export const getUsers = (currentPage, pageSize) => {
    return axios.get(`http://localhost:3001/users?_page=${currentPage}&_limit=${pageSize}`)
}
