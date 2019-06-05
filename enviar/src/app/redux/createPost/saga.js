import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { POSTS } from '../../../constants/endpoints';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';

import {
    CREATE_POST
} from '../../../constants/actions';

import {
    createPostSuccess, createPostError
} from './action';

const createPostAsync = async (img, caption) => {
    const data = new FormData();
    if (caption) data.append('caption', caption);
    data.append('img', img);

    return axios.post(POSTS, data);
}

function* createPosts({ payload }) { 
    try{
        yield put(showLoading());
        const { img, caption } = payload.post;
        const newPost = yield call(createPostAsync, img, caption);
        yield put(createPostSuccess(newPost.data));
        toast.success('Successfully posted');
        payload.history.push('/');
    } catch(error) {
        toast.error(error.response.data.message);
        yield put(createPostError(error.response.data.message));
    } finally {
        yield put(hideLoading());
    }
}


export function* watchPosts() {
    yield takeEvery(CREATE_POST, createPosts);
}

export default function* rootSaga() {
    yield all([
        fork(watchPosts)
    ]);
}