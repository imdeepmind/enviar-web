import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { USERS } from '../../../constants/endpoints';
import {
    USERS as USERS_ACTION
} from '../../../constants/actions';


import {
    usersSuccess, usersError
} from './action';

const getUsersAsync = async (page, limit) => {

    if (!page || page < 0) page = 0;
    if (!limit || limit <= 0) limit = 10;

    const url = `${USERS}?page=${page}&limit=${limit}`;

    const config = {
        headers: { 'Authorization': localStorage.getItem('user') }
    };

    return axios.get(url, config);
}

function* getUsers({ payload }) {    
    try {
        const { page, limit } = payload.user;
        const myUsers = yield call(getUsersAsync, page, limit);
        console.log(myUsers);
        yield put(usersSuccess(myUsers.data));
    } catch (error) {
        console.log(error);
        yield put(usersError(error.response.data.message));
    }
}

export function* watchUsers() {
    yield takeEvery(USERS_ACTION, getUsers);
}

export default function* rootSaga() {
    yield all([
        fork(watchUsers)
    ]);
}