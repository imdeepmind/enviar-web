import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { CHAT } from '../../../constants/endpoints';
import { toast } from 'react-toastify';

import {
    GET_CONVERSATION
} from '../../../constants/actions';

import {
    getChatSuccess, getChatError
} from './action';

const getChatAsync = async (username, page, limit) => {
    const url = CHAT + username + `?page=${page}&limit=${limit}`;
    return axios.get(url);
}

function* getChats({ payload }) { 
    try{
        const { username, page, limit } = payload.chat;
        const newChat = yield call(getChatAsync, username, page, limit);
        yield put(getChatSuccess(newChat.data));
    } catch(error) {
        toast.error(error.response.data.message);
        yield put(getChatError(error.response.data.message));
    }
}


export function* watchChats() {
    yield takeEvery(GET_CONVERSATION, getChats);
}

export default function* rootSaga() {
    yield all([
        fork(watchChats)
    ]);
}