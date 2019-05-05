import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { LOGIN, REGISTER, VERIFY as VERIFY_ROUTE } from '../../../constants/endpoints';
import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER,
    VERIFY
} from '../../../constants/actions';

import {
    loginUserError,
    loginUserSuccess,
    registerUserError,
    registerUserSuccess,
    verifySuccess,
    verifyError
} from './action';

const registerAccountAsync = async (name, email, username, password, country, gender, dob, conformPassword) => {
    const data = {
        name: name,
        email: email,
        username: username,
        password: password,
        country: country,
        gender: gender.value,
        dob: dob,
        conformPassword: conformPassword
    }
    return axios.post(REGISTER, data);
}

function* registerAccount({ payload }) {    
    try {
        const { name, email, username, password, country, gender, dob, conformPassword } = payload.user;
        const registerUser = yield call(registerAccountAsync, name, email, username, password, country, gender, dob, conformPassword);
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
        toast.success('Successfully logged in');
        payload.history.push('/');
        yield put(loginUserSuccess(loginUser.data));
    } catch (error) {
        let msg = error.response ? error.response.data.message : error;
        toast.error(msg);
        yield put(loginUserError(msg));
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

const verifyAsync = async () => {
    const config = {
        headers: { 'Authorization': localStorage.getItem('user') }
    };
    return axios.get(VERIFY_ROUTE, config);
}

function* verify(){
    try{
        const res = yield call(verifyAsync);
        yield put(verifySuccess(res));
    } catch(ex){
        yield put(verifyError(ex));
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

export function* watchVerify(){
    yield takeEvery(VERIFY, verify);
}


export default function* rootSaga() {
    yield all([
        fork(watchRegisterUser),
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchVerify),
    ]);
}