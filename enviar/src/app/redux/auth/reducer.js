import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGOUT_USER
} from '../../../constants/actions';

const INIT_STATE = {
    user: localStorage.getItem('user'),
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case LOGIN_USER_ERROR:
            return { ...state, loading: false, error: action.payload};
        case REGISTER_USER:
            return { ...state, loading: true };
        case REGISTER_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case REGISTER_USER_ERROR:
            return { ...state, loading: false, error: action.payload};
        case LOGOUT_USER:
            return { ...state ,user:null};
        default: return { ...state };
    }
}