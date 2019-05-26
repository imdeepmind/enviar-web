import {
    USERS, USERS_SUCCESS, USERS_ERROR, 
    USERS_INDIVIDUAL, USERS_SUCCESS_INDIVIDUAL, USERS_ERROR_INDIVIDUAL, 
    USER_ACTION, USER_ACTION_SUCCESS, USER_ACTION_ERROR,
    USERS_FOLLOWEE, USERS_FOLLOWEE_ERROR, USERS_FOLLOWEE_SUCCESS,
    USERS_FOLLOWERS, USERS_FOLLOWERS_ERROR, USERS_FOLLOWERS_SUCCESS
} from '../../../constants/actions';

const INIT_STATE = {
    users: [],
    followers: [],
    following: [],
    more: false,
    user: {},
    action: null,
    error: null,
    errorSmall: null,
    loading: true,
    loadingSmall: true
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
        case USERS_FOLLOWERS:
            return { ...state, loadingSmall: true };
        case USERS_FOLLOWERS_SUCCESS: 
            return { ...state, 
                        loadingSmall: false, 
                        followers: action.payload
                    };
        case USERS_FOLLOWERS_ERROR:
            return { ...state, loadingSmall: false, errorSmall: action.payload};
        case USERS_FOLLOWEE:
            return { ...state, loadingSmall: true };
        case USERS_FOLLOWEE_SUCCESS: 
            return { ...state, 
                        loadingSmall: false, 
                        followers: action.payload
                    };
        case USERS_FOLLOWEE_ERROR:
            return { ...state, loadingSmall: false, errorSmall: action.payload};
        default: return { ...state };
    }
}