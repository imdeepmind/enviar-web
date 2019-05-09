import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { POSTS } from '../../../constants/endpoints';
import {
    CREATE_POST
} from '../../../constants/actions';

import {
    createPostSuccess, createPostError
} from './action';

const createPostAsync = async (img, caption) => {

    const data = new FormData();
    data.append('caption', caption);
    data.append('img', img);
    const config = {
        headers: { 
            'Authorization': localStorage.getItem('user'),
            'Content-Type': img.type
        }
    };

    return axios.post(POSTS, data, config);
}

function* createPosts({ payload }) { 
    try{
        const { img, caption } = payload.post;
        const newPost = yield call(createPostAsync, img, caption);
        yield put(createPostSuccess(newPost.data));
    } catch(error) {
        yield put(createPostError(error.response.data.message));
    } finally {
        
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