import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { ME } from '../../../constants/endpoints';
import {
    GET_ME
} from '../../../constants/actions';

import {
    getMeSuccess, getMeError
} from './action';


const getMeAsync = async () => {
    return axios.get(ME);
}

function* getMe() {    
    try {
        const me = yield call(getMeAsync);
        yield put(getMeSuccess(me.data));
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message);
        yield put(getMeError(error.response.data.message));
    }
}

export function* watchMe(){
    yield takeEvery(GET_ME, getMe);
}

export default function* rootSaga() {
    yield all([
        fork(watchMe)
    ]);
}