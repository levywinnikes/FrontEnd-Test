import axios from 'axios';
export const SEARCH = 'SEARCH';


export const search = (value) => {
    const users = axios.get('./users.json')

    return {
        type: SEARCH,
        payload: value,
        users
    };
}

export const listUsers = () => {
    const request = axios.get('./users.json')
    return {
        type: 'USERS_LISTED',
        payload: request
    }
}

export const removeUser = (userListUpdated) => {
    const request = userListUpdated;
    return {
        type: 'USER_REMOVE',
        payload: request
    }
}




export const showUser = (user) => {
    if (user == null) {
        var defaultObject = {
            id: null,
            firstName: "",
            lastName: "",
            age: null,
            description: ""
        }
        user = defaultObject
    }

    const request = user;

    return {
        type: 'USER_SHOW',
        payload: request,
    }




}


