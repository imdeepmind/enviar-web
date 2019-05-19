import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { UPDATE_DP, UPDATE_INFO } from '../../../constants/endpoints';
import {
    EDIT_DP, EDIT_INFO
} from '../../../constants/actions';
import {
    editDpSuccess, editDpError, editInfoSuccess, editInfoError
} from './action';


const editInfoAsync = async (data) => {
    return axios.put(UPDATE_INFO, data);
}

const editDpAsync = async (avatar) => {
    const data = new FormData();
    data.append('avatar', avatar);

    return axios.put(UPDATE_DP, data);
}

function* editInfo({payload}) {    
    try {
        yield put(showLoading());
        const data = payload.data;
        const edit = yield call(editInfoAsync, data);
        toast.success(`Successfully updated account`);
        yield put(editInfoSuccess(edit.data));
    } catch (error) {
        toast.error(error.response.data.message);
        yield put(editInfoError(error.response.data.message));
    } finally {
        yield put(hideLoading());
    }
}

function* editDp({payload}) {    
    try {
        yield put(showLoading());
        const avatar = payload.avatar;
        const me = yield call(editDpAsync, avatar);
        toast.success(`Successfully updated display picture`);
        yield put(editDpSuccess(me.data));
    } catch (error) {
        toast.error(error.response.data.message);
        yield put(editDpError(error.response.data.message));
    } finally {
        yield put(hideLoading());
    }
}

export function* watchEditDp(){
    yield takeEvery(EDIT_DP, editDp);
}

export function* watchEditInfo(){
    yield takeEvery(EDIT_INFO, editInfo);
}

export default function* rootSaga() {
    yield all([
        fork(watchEditDp),
        fork(watchEditInfo)
    ]);
}