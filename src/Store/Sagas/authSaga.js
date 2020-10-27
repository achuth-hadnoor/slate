import { put, call, takeLatest } from 'redux-saga/effects';
import {
         REGISTER_USER, 
         REGISTER_USER_SUCCESS,
         REGISTER_USER_ERROR,
         LOGIN_USER, 
         LOGIN_USER_SUCCESS, 
         LOGIN_USER_ERROR 
        } from '../constants';
import { login, signUp } from '../../api/auth';

export function* registerSaga(payload) {
    try {
        const response = yield call(signUp, payload);
        yield  put({ type: REGISTER_USER_SUCCESS, response }) 
    } catch (error) {
        yield put({ type: REGISTER_USER_ERROR, error });
    }
}

export function* loginSaga(payload) {  
    try {
        const response = yield call(login, payload);
        console.log(response);
        
        yield put({ type: LOGIN_USER_SUCCESS, response });
    } catch (error) {
        yield put({ type: LOGIN_USER_ERROR, error })
    }
}


export function* watchUserAuthSaga() {
    yield takeLatest(REGISTER_USER, registerSaga);
    yield takeLatest(LOGIN_USER, loginSaga);
}