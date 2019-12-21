import axios from 'axios';



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

export const searchUser = async (filteredUser) => {
    const request = await axios.get('./users.json')

    return {
        type: 'SEARCH',
        payload: filteredUser
    }
}

export const removeUser = (userListUpdated) => {
    const request = userListUpdated;
    return {
        type: 'USER_REMOVE',
        payload: request
    }
}


export const showUser = async (userId) => {
    console.log("cheguei aqui" + userId)
    const request = await axios.get('../users.json')

    const findUser = {
        id: "",
        firstName: "",
        lastName: "",
        age: "",
        description: "",
    }


    if(request.data.length && userId != null){
        for(var i = 0;i < request.data.length ; i++){
            console.log("ID EH " + request.data[i].id +  userId)

            if(request.data[i].id == userId){
                console.log("achei")

                findUser.id = request.data[i].id
                findUser.firstName = request.data[i].firstName
                findUser.lastName = request.data[i].lastName
                findUser.age = request.data[i].age
                findUser.description = request.data[i].description
               
                break
            }
        }
    }

    console.log(findUser)


    return {
        type: 'USER_SHOW',
        payload: findUser,
        
    }
}


