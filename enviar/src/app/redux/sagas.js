import { all } from 'redux-saga/effects';

import authSagas from './auth/saga';
import homeSagas from './home/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    homeSagas(),
  ]);
}