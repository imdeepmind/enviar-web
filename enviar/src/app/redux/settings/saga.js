import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { CHANGE_PASSWORD as CHANGE_PASSWORD_URL } from '../../../constants/endpoints';
import {
    CHANGE_PASSWORD
} from '../../../constants/actions';

import {
    changePasswordSuccess, changePasswordError
} from './action';


const changePasswordAsync = async (oldPassword, newPassword, conformNewPassword) => {
    const data = {
        old: oldPassword,
        new: newPassword,
        conformNewPassword: conformNewPassword
    }
    return axios.put(CHANGE_PASSWORD_URL, data);
}

function* changePassword({payload}) {    
    try {
        yield put(showLoading());
        const { oldPassword, newPassword, conformNewPassword } = payload.data;
        const pass = yield call(changePasswordAsync, oldPassword, newPassword, conformNewPassword);
        toast.success(`Successfully updated password`);
        yield put(changePasswordSuccess(pass.data));
    } catch (error) {
        toast.error(error.response.data.message);
        yield put(changePasswordError(error.response.data.message));
    } finally {
        yield put(hideLoading());
    }
}

export function* watchPasswordChange(){
    yield takeEvery(CHANGE_PASSWORD, changePassword);
}

export default function* rootSaga() {
    yield all([
        fork(watchPasswordChange)
    ]);
}