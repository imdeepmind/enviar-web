import {
    USERS, USERS_SUCCESS, USERS_ERROR, USERS_INDIVIDUAL, USERS_SUCCESS_INDIVIDUAL, USERS_ERROR_INDIVIDUAL, 
    USER_ACTION, USER_ACTION_SUCCESS, USER_ACTION_ERROR
} from '../../../constants/actions';

const INIT_STATE = {
    users: [],
    loading: true,
    limit: 1,
    page: 1,
    pages: 1,
    total: 1,
    error: null,
    user: {},
    action: null
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case USERS:
            return { ...state, loading: true };
        case USERS_SUCCESS: 
            return { ...state, 
                        loading: false, 
                        users: [...state.users, ...action.payload.docs], 
                        limit: action.payload.limit,
                        page: action.payload.page,
                        pages: action.payload.pages,
                        total: action.payload.total,
                    };
        case USERS_ERROR:
            return { ...state, loading: false, error: action.payload};

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
            return {...state, loading: true}
        case USER_ACTION_SUCCESS: 
            return {...state, loading: false, action: action.payload}
        case USER_ACTION_ERROR: 
            return {...state, loading: false, action: action.payload}
        default: return { ...state };
    }
}