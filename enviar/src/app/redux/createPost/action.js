import {
    CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_ERROR
} from '../../../constants/actions';

export const createPost = (post, history) => ({
    type: CREATE_POST,
    payload: { post, history }
});

export const createPostSuccess = (post) => ({
    type: CREATE_POST_SUCCESS,
    payload: post
});

export const createPostError = (error) => ({
    type: CREATE_POST_ERROR,
    payload: error
});