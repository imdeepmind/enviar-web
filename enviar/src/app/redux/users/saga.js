import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { 
    USERS, USER_ACTION as USER_ACTION_URL,
} from '../../../constants/endpoints';

import {
    USERS as USERS_ACTION, USERS_INDIVIDUAL, USER_ACTION, USERS_FOLLOWERS, USERS_FOLLOWEE
} from '../../../constants/actions';


import {
    usersSuccess, usersError, usersSuccessIndividual, usersErrorIndividual, userActionSuccess, userActionError, usersFolloweeSuccess, usersFollowersError, usersFollowersSuccess, usersFolloweeError
} from './action';

const getUsersAsync = async (page, limit, q) => {

    if (!page || page < 0) page = 0;
    if (!limit || limit <= 0) limit = 10;

    let url = '';
    if (q === '' || q === undefined)  url = `${USERS}?page=${page}&limit=${limit}`;
    else  url = `${USERS}?page=${page}&limit=${limit}&q=${q}`;

    return axios.get(url);
}

function* getUsers({ payload }) {    
    try {
        const { page, limit, q } = payload.user;
        const myUsers = yield call(getUsersAsync, page, limit, q);
        yield put(usersSuccess(myUsers.data));
    } catch (error) {
        toast.error(error.response.data.message);
        yield put(usersError(error.response.data.message));
    }
}

const getUserAsync = async (username) => {
    const url = `${USERS}${username}`;

    return axios.get(url);
}

function* getUser({ payload }) {    
    try {
        yield put(showLoading());
        const { username } = payload.user;
        const myUsers = yield call(getUserAsync, username);
        yield put(usersSuccessIndividual(myUsers.data));
    } catch (error) {
        toast.error(error.response.data.message);
        yield put(usersErrorIndividual(error.response.data.message));
    } finally {
        yield put(hideLoading());
    }
}

const userActionAsync = (what, username) => {
    const url = USER_ACTION_URL + what + '/' + username;
    return axios.put(url, {});
}

function* userAction ({payload}){
    try {
        yield put(showLoading());
        const { what, username } = payload.user;
        const actionMan = yield call(userActionAsync, what, username);
        if (what === 'follow') 
            toast.success(`You are now following ${actionMan.data.followers}`);
        else if (what === 'unfollow')
            toast.success(`You are not now following ${actionMan.data.followers}`);
        else if (what === 'block')
            toast.success(`You have blocked ${actionMan.data.blocked}`);
        else 
            toast.success(`You have unblocked ${actionMan.data.unblocked}`);

        yield put(userActionSuccess(actionMan.data));
    } catch (error) {
        toast.error(error.response.data.message);
        yield put(userActionError(error.response.data.message));
    } finally {
        yield put(hideLoading());
    }
}

const usersFollowersAsync = (username) => {
    console.log(username);
    const url = `${USERS}${username}/followers`;
    return axios.get(url);
}

function* usersFollowers({payload}){
    try {
        const { username } = payload.user;
        const list = yield call(usersFollowersAsync, username);
        yield put(usersFollowersSuccess(list.data));
    } catch (error) {
        toast.error(error.response.data.message);
        yield put(usersFollowersError(error.response.data.message));
    }
}

const usersFolloweeAsync = (username) => {
    const url = `${USERS}${username}/followee`;
    return axios.get(url); 
}

function* usersFollowee({payload}){
    try {
        const { username } = payload.user;
        const list = yield call(usersFolloweeAsync, username);
        yield put(usersFolloweeSuccess(list.data));
    } catch (error) {
        toast.error(error.response.data.message);
        yield put(usersFolloweeError(error.response.data.message));
    }
}

export function* watchUserAction(){
    yield takeEvery(USER_ACTION, userAction);
}

export function* watchUsers() {
    yield takeEvery(USERS_ACTION, getUsers);
}

export function* watchUser() {
    yield takeEvery(USERS_INDIVIDUAL, getUser);
}

export function* watchUsersFollowers(){
    yield takeEvery(USERS_FOLLOWERS, usersFollowers);
}

export function* watchUsersFollowee(){
    yield takeEvery(USERS_FOLLOWEE, usersFollowee);
}

export default function* rootSaga() {
    yield all([
        fork(watchUsers),
        fork(watchUser),
        fork(watchUserAction),
        fork(watchUsersFollowers),
        fork(watchUsersFollowee)
    ]);
}