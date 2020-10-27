import { put, call, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase/app'
import {
    REGISTER_USER, 
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_ERROR 
} from '../constants';
import { signUp } from '../../api/auth';
import { reduxSagaFirebase } from '../../api/firebase';
  

const authProvider = new firebase.auth.GoogleAuthProvider()

const formatUser = (uid,userWithoutToken)=>{ 
    const {displayName,email} = userWithoutToken;
    const user = {
        uid:uid,
        name:displayName || email.substring(0, email.lastIndexOf("@")),
        email:email,
    } 
    return user;
}


export function* loginSaga() {
  try {
    const data = yield call(reduxSagaFirebase.auth.signInWithPopup, authProvider); 
    const {uid,...userWithoutToken} = firebase.auth().currentUser;
    var user = formatUser(uid,userWithoutToken) 
    yield put({type:LOGIN_USER_SUCCESS,user})
  }
  catch(error) {
    yield put({type:LOGIN_USER_ERROR,error})
  }
}

export function* registerSaga(payload) {
    try {
        const response = yield call(signUp, payload);
        yield  put({ type: REGISTER_USER_SUCCESS, response }) 
    } catch (error) {
        yield put({ type: REGISTER_USER_ERROR, error });
    }
}

export function* watchUserAuthSaga() {
    yield takeLatest(REGISTER_USER, registerSaga);
    yield takeLatest(LOGIN_USER, loginSaga);
}