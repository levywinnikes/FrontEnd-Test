const INITIAL_STATE = {
    list: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'USERS_LISTED':
            return {
                ...state, list: action.payload.data
            }

        case 'USER_REMOVE':
            return {
                ...state, list: action.payload
            }

        case 'USER_SHOW':
            return {
                ...state, show: action.payload
            }

        default:
            return state;
    }
}