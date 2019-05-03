import {
    USERS, USERS_SUCCESS, USERS_ERROR
} from '../../../constants/actions';

const INIT_STATE = {
    users: [],
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case USERS:
            return { ...state, loading: true };
        case USERS_SUCCESS:
            return { ...state, loading: false, users: [...INIT_STATE.users, ...action.payload] };
        case USERS_ERROR:
            return { ...state, loading: false, error: action.payload};
        default: return { ...state };
    }
}