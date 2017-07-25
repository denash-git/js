import {APP} from '../consts/index.js';

const initialState = {
    userList: [],			//фильтрованный список
    users: [],			//список с сервера
    user: {},
    btn: "add",
    id: ""
};

export const reducer1 = (state = initialState, action) => {
    switch(action.type) {
        case APP.CHANGE_USER_DATA:
            console.log(action);
            return state;

        case APP.SET_USER:
            console.log(action.users);
            return Object.assign({},state,{ users: action.users});


        case APP.SEARCH_USER:
            let name = action.rec;
            //e && (name = e.target.value);

            let users = state.users;
            let userList = [];

            console.log(users);

            userList = users.filter(item => {
                if(!name) return false;

                let lowName = item.name.toLowerCase();
                let lowValue = name.toLowerCase();

                return lowName.indexOf(lowValue) !== -1;
            });

            if(!userList.length) userList = users;
            return { state, userList: userList};

        default: return state;
    }
};