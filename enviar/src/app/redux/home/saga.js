import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { POSTS } from '../../../constants/endpoints';
import {
    POSTS as POSTS_ACTION
} from '../../../constants/actions';


import {
    postsSuccess, postsError
} from './action';

const getPostsAsync = async (page, limit) => {

    if (!page || page < 0) page = 0;
    if (!limit || limit <= 0) limit = 10;

    const url = `${POSTS}?page=${page}&limit=${limit}`;

    const config = {
        headers: { 'Authorization': localStorage.getItem('user') }
    };

    return axios.get(url, config);
}

function* getPosts({ payload }) {    
    try {
        const { page, limit } = payload.user;
        const myPosts = yield call(getPostsAsync, page, limit);
        console.log(myPosts);
        yield put(postsSuccess(myPosts.data));
    } catch (error) {
        console.log(error);
        yield put(postsError(error.response.data.message));
    }
}

export function* watchPosts() {
    yield takeEvery(POSTS_ACTION, getPosts);
}

export default function* rootSaga() {
    yield all([
        fork(watchPosts)
    ]);
}