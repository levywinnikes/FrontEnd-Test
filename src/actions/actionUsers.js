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

export const changeUser = (user) => {
    return {
        type: 'USER_CHANGE',
        payload: user

    }
}

 export const listUsers = async (user) => {
    const request = await axios.get('./users.json')

    
    if(request.data.length && user != null){
        for(var i = 0;i < request.data.length ; i++){
            if(request.data[i].id === user.id){
                request.data[i].firstName = user.firstName
                request.data[i].lastName = user.lastName
            }
        }
    }
 
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


