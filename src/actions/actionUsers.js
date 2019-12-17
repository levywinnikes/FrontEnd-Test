import axios from 'axios';


export const filterUser = (filter) => {
    return {
        type: 'USERS_FILTER',
        filter,
    }
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
    if(user == null){
      var defaultObject = {
            id: null,
            firstName: "",
            lastName: "",
            age: null,
            description: "" }
      user = defaultObject
    }

    const request = user;

    return {
        type: 'USER_SHOW',
        payload: request,
    }
    



}
  

