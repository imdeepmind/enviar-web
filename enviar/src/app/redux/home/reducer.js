import {
    POSTS, POSTS_SUCCESS, POSTS_ERROR
} from '../../../constants/actions';

const INIT_STATE = {
    posts: [],
    more: false,
    loading: true
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case POSTS:
            return { ...state, loading: true, more: false };
        case POSTS_SUCCESS:
            return { ...state, 
                loading: false, 
                posts: action.payload.docs,
                more: action.payload.docs.length > 0 ? true : false
            };
        case POSTS_ERROR:
            return { ...state, loading: false, error: action.payload, more: false};
        default: return { ...state };
    }
}