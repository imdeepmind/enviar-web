import {
    USERS, USERS_SUCCESS, USERS_ERROR
} from '../../../constants/actions';

const INIT_STATE = {
    users: [],
    loading: true,
    limit: 1,
    page: 1,
    pages: 1,
    total: 1,
    error: null
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
        default: return { ...state };
    }
}