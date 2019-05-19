import { all } from 'redux-saga/effects';

import authSagas from './auth/saga';
import homeSagas from './home/saga';
import userSagas from './users/saga';
import createPost from './createPost/saga';
import chatSaga from './chats/saga';
import meSaga from './me/saga';
import settingsSaga from './settings/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    homeSagas(),
    userSagas(),
    createPost(),
    chatSaga(),
    meSaga(),
    settingsSaga()
  ]);
}