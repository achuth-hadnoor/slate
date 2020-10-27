import { all } from 'redux-saga/effects'
import { watchUserSaga } from './userSaga'
import { watchUserAuthSaga } from './authSaga'

export function* rootSaga() {
    yield all([
        watchUserSaga(),
        watchUserAuthSaga(),
    ])
}