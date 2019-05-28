import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { CHAT, ALL_PEOPLES } from '../../../constants/endpoints';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';

import {
    GET_CONVERSATION, GET_ALL_PEOPLES, SEND_MESSAGE
} from '../../../constants/actions';

import {
    getChatSuccess, getChatError, getAllPeoplesSuccess, getAllPeoplesError, sendMessageSuccess, sendMessagetError
} from './action';

const getChatAsync = async (username, page, limit) => {
    const url = CHAT + username + `?page=${page}&limit=${limit}`;
    return axios.get(url);
}

const getAllPeoplesAsync = async (page, limit) => {
    if (!page || page < 0) page = 0;
    if (!limit || limit <= 0) limit = 10;

    const url = `${ALL_PEOPLES}?page=${page}&limit=${limit}`;
    return axios.get(url);
}

const sendMessageAsync = (message, username) => {
    const url = CHAT + username;
    const data = {
        message
    }
    return axios.post(url, data);
}

function* getChats({ payload }) { 
    try{
        console.log(payload)
        const { username, page, limit } = payload.chat;
        const newChat = yield call(getChatAsync, username, page, limit);
        yield put(getChatSuccess(newChat.data));
    } catch(error) {
        console.log(error);
        toast.error(error.response.data.message);
        yield put(getChatError(error.response.data.message));
    }
}

function* getAllPeoples2({payload}){
    try{
        yield put(showLoading());
        const { page, limit } = payload.data;
        const peoples = yield call(getAllPeoplesAsync, page, limit);
        yield put(getAllPeoplesSuccess(peoples.data));
    } catch(error) {
        toast.error(error.response.data.message);
        yield put(getAllPeoplesError(error.response.data.message));
    } finally {
        yield put(hideLoading());
    }
}

function* sendMessage({payload}){
    try{
        yield put(showLoading());
        const { message, username } = payload.data;
        const msg = yield call(sendMessageAsync, message, username);
        yield put(sendMessageSuccess(msg.data));
    } catch(error) {
        toast.error(error.response.data.message);
        yield put(sendMessagetError(error.response.data.message));
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

export function* watchSendMessage() {
    yield takeEvery(SEND_MESSAGE, sendMessage);
}

export default function* rootSaga() {
    yield all([
        fork(watchChats),
        fork(watchAllPeoples),
        fork(watchSendMessage)
    ]);
}