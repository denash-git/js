import {APP} from '../consts/index.js';

export const app = {
    setUserData: (event) => ({type: APP.SET_USER_DATA, event}),
    searchUser: (rec) => ({type: APP.SEARCH_USER, rec}),
    setUsers: (users) =>({type: APP.GET_USERS, users})
};
