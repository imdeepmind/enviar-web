import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { CHAT, ALL_PEOPLES } from '../../../constants/endpoints';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';

import {
    GET_CONVERSATION, GET_ALL_PEOPLES
} from '../../../constants/actions';

import {
    getChatSuccess, getChatError, getAllPeoplesSuccess, getAllPeoplesError
} from './action';

const getChatAsync = async (username, page, limit) => {
    const url = CHAT + username + `?page=${page}&limit=${limit}`;
    return axios.get(url);
}

const getAllPeoplesAsync = async () => {
    return axios.get(ALL_PEOPLES);
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

function* getAllPeoples2(){
    try{
        yield put(showLoading());
        const peoples = yield call(getAllPeoplesAsync);
        yield put(getAllPeoplesSuccess(peoples.data));
    } catch(error) {
        toast.error(error.response.data.message);
        yield put(getAllPeoplesError(error.response.data.message));
    } finally {
        yield put(hideLoading());
    }
}

export function* watchChats() {
    yield takeEvery(GET_CONVERSATION, getChats);
}

export function* watchAllPeoples() {
    yield takeEvery(GET_ALL_PEOPLES, getAllPeoples2);
}

export default function* rootSaga() {
    yield all([
        fork(watchChats),
        fork(watchAllPeoples)
    ]);
}