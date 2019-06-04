import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import store from '../store';

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

const registerAccountAsync = async (name, email, username, password, country, gender, dob) => {
    const data = {
        name: name,
        email: email,
        username: username,
        password: password,
        country: country,
        gender: gender,
        dob: dob,
        conformPassword: password
    }
    return axios.post(REGISTER, data);
}

function* registerAccount({ payload }) {    
    try {
        yield put(showLoading());
        const { name, email, username, password, country, gender, dob } = payload.user;
        const registerUser = yield call(registerAccountAsync, name, email, username, password, country, gender, dob);
        toast.success(`Successfully created user with ${registerUser.data.username}`);
        yield put(registerUserSuccess(registerUser.data));
        payload.history.push('/login');
    } catch (error) {
        if (error.response.data[0]){
            toast.error(error.response.data[0].msg);
        } else toast.error(error.response.data.message);
        
        yield put(registerUserError(error.response.data.message));
    } finally {
        yield put(hideLoading());
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
        yield put(showLoading());
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
    finally{
        yield put(hideLoading());
    }
}

const logoutAsync = async (history) => {
    history.push('/login')
}

function* logout({payload}) {
    const { history } = payload
    try {
        localStorage.removeItem('user');
        store.dispatch(store.dispatch({
            type: 'USER_LOGOUT'
        }));
        yield call(logoutAsync,history);
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