import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { watchUserSaga } from './Sagas/userSaga';
import rootReducer from './Reducers';

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware));
    
sagaMiddleware.run(watchUserSaga);

export {
    Store
}
