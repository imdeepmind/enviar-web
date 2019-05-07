import {
    POSTS, POSTS_SUCCESS, POSTS_ERROR
} from '../../../constants/actions';

const INIT_STATE = {
    posts: [],
    limit: 1,
    page: 1,
    pages: 1,
    total: 1,
    loading: true
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case POSTS:
            return { ...state, loading: true };
        case POSTS_SUCCESS:
            return { ...state, 
                loading: false, 
                posts: [...state.posts, ...action.payload.docs], 
                limit: action.payload.limit,
                page: action.payload.page,
                pages: action.payload.pages,
                total: action.payload.total,
            };
        case POSTS_ERROR:
            return { ...state, loading: false, error: action.payload};
        default: return { ...state };
    }
}