import {
    POSTS, POSTS_SUCCESS, POSTS_ERROR
} from '../../../constants/actions';

export const posts = (user, history) => ({
    type: POSTS,
    payload: { user, history }
});

export const postsSuccess = (user) => ({
    type: POSTS_SUCCESS,
    payload: user
});

export const postsError = (error) => ({
    type: POSTS_ERROR,
    payload: error
});