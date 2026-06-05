import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import todoSaga from './todos/sagas';

export default function* rootSaga() {
    return yield all([
        authSaga,
        todoSaga,
    ]);
}