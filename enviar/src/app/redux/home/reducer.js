import {
    POSTS, POSTS_SUCCESS, POSTS_ERROR
} from '../../../constants/actions';

const INIT_STATE = {
    posts: [],
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case POSTS:
            return { ...state, loading: true };
        case POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload };
        case POSTS_ERROR:
            return { ...state, loading: false, error: action.payload};
        default: return { ...state };
    }
}