import { call, put, take } from "redux-saga/effects";
import { SET_USER,SET_USER_SAGA } from "../Actions/constants";
 

export function* setUserSaga(action) { 
    // get firebase auth data and add to redux store
    const user = {
        id:'123sdas',
        name:'Achuth',
        lastSeen : Date.now()
    }
    console.log(user);
    
    yield put({ type: SET_USER, user })
}

export function* watchUserSaga(){
    yield take(SET_USER_SAGA,setUserSaga)
}