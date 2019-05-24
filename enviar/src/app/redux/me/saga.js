import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { ME, MY_BLOCKED, MY_FOLLOWERS, MY_FOLLOWING } from '../../../constants/endpoints';
import {
    GET_ME, GET_FOLLOWERS_LIST, GET_FOLLOWING_LIST, GET_BLOCKED_LIST
} from '../../../constants/actions';

import {
    getMeSuccess, getMeError, 
    getBlockedListError, getBlockedListSuccess, 
    getFollowersListError, getFollowersListSuccess,
    getFollowingListError, getFollowingListSuccess
} from './action';


const getMeAsync = async () => {
    return axios.get(ME);
}

function* getMe() {    
    try {
        const me = yield call(getMeAsync);
        yield put(getMeSuccess(me.data));
    } catch (error) {
        toast.error(error.response.data.message);
        yield put(getMeError(error.response.data.message));
    }
}

const getFollowersListAsync = () => {
    return axios.get(MY_FOLLOWERS);
}

function* getFollowersList(){
    try {
        const list = yield call(getFollowersListAsync);
        yield put(getFollowersListSuccess(list.data));
    } catch (error) {
        toast.error(error.response.data.message);
        yield put(getFollowersListError(error.response.data.message));
    }
}

const getFollowingListAsync = () => {
    return axios.get(MY_FOLLOWING);
}

function* getFollowingList(){
    try {
        const list = yield call(getFollowingListAsync);
        yield put(getFollowingListSuccess(list.data));
    } catch (error) {
        toast.error(error.response.data.message);
        yield put(getFollowingListError(error.response.data.message));
    }
}

const getBlockedListAsync = () => {
    return axios.get(MY_BLOCKED);
}

function* getBlockedList(){
    try {
        const list = yield call(getBlockedListAsync);
        yield put(getBlockedListSuccess(list.data));
    } catch (error) {
        toast.error(error.response.data.message);
        yield put(getBlockedListError(error.response.data.message));
    }
}

export function* watchMe(){
    yield takeEvery(GET_ME, getMe);
}

export function* watchFollowersList(){
    yield takeEvery(GET_FOLLOWERS_LIST, getFollowersList);
}

export function* watchFollowingList(){
    yield takeEvery(GET_FOLLOWING_LIST, getFollowingList);
}

export function* watchBlockedList(){
    yield takeEvery(GET_BLOCKED_LIST, getBlockedList);
}

export default function* rootSaga() {
    yield all([
        fork(watchMe),
        fork(watchFollowersList),
        fork(watchFollowingList),
        fork(watchBlockedList)
    ]);
}