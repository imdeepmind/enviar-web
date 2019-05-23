import {
    USERS, USERS_SUCCESS, USERS_ERROR, USERS_INDIVIDUAL, USERS_SUCCESS_INDIVIDUAL, USERS_ERROR_INDIVIDUAL, 
    USER_ACTION, USER_ACTION_SUCCESS, USER_ACTION_ERROR
} from '../../../constants/actions';

const INIT_STATE = {
    users: [],
    loading: true,
    more: false,
    error: null,
    user: {},
    action: null
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case USERS:
            return { ...state, loading: true, more: false };
        case USERS_SUCCESS: 
            return { ...state, 
                        loading: false, 
                        users: action.payload.docs, 
                        more: action.payload.docs.length > 0 ? true : false
                    };
        case USERS_ERROR:
            return { ...state, loading: false, error: action.payload, more: false};

        case USERS_INDIVIDUAL:
            return { ...state, loading: true };
        case USERS_SUCCESS_INDIVIDUAL: 
            return { ...state, 
                        loading: false, 
                        user: action.payload
                    };
        case USERS_ERROR_INDIVIDUAL:
            return { ...state, loading: false, error: action.payload};
        case USER_ACTION: 
            return {...state}
        case USER_ACTION_SUCCESS: 
            return {...state, action: action.payload}
        case USER_ACTION_ERROR: 
            return {...state, action: action.payload}
        default: return { ...state };
    }
}