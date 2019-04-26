import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { LOGIN, REGISTER } from '../../../constants/endpoints';
import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER,
} from '../../../constants/actions';

import {
    loginUserError,
    loginUserSuccess,
    registerUserError,
    registerUserSuccess
} from './action';

const registerAccountAsync = async (name, email, username, password, country, gender, dob) => {
    const data = {
        name: name,
        email: email,
        username: username,
        password: password,
        country: country,
        gender: gender.value,
        dob: dob,
    }
    return axios.post(REGISTER, data);
}

function* registerAccount({ payload }) {    
    try {
        const { name, email, username, password, country, gender, dob } = payload.user;
        const registerUser = yield call(registerAccountAsync, name, email, username, password, country, gender, dob);
        yield put(registerUserSuccess(registerUser.data));
    } catch (error) {
        payload.history.push('/login');
        yield put(registerUserError(error.response.data.message));
    }
}

const loginAccountAsync = async (username, password) => {
    const data = {
        username : username,
        password : password
    };
    return axios.post(LOGIN, data);
}

function* loginAccount({ payload }) {    
    try {
        const { username, password } = payload.user;
        const loginUser = yield call(loginAccountAsync, username, password);
        localStorage.setItem('user', loginUser.data.token);
        payload.history.push('/');
        yield put(loginUserSuccess(loginUser.data));
    } catch (error) {
        yield put(loginUserError(error.response.data.message));
    }
}

const logoutAsync = async (history) => {
    history.push('/')
}

function* logout({payload}) {
    const { history } = payload
    try {
        yield call(logoutAsync,history);
        localStorage.removeItem('user');
    } catch (error) {
    }
}

export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerAccount);
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginAccount);
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}


export default function* rootSaga() {
    yield all([
        fork(watchRegisterUser),
        fork(watchLoginUser),
        fork(watchLogoutUser),
    ]);
}