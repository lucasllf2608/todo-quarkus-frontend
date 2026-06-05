import { takeLatest, call, put, all, delay }  from "redux-saga/effects";
import { types } from './types';
import { loginSuccess, loginFailure } from './actions';

function* login({payload}){
    try {

        const { email, password } = payload;
        yield delay(1500);
        if(email === 'lucas@email.com' && password === '123456'){
            const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
            const mockUser = { id: 1, name: 'Lucas de Lima', email};
            yield put(loginSuccess(mockToken, mockUser));

        } else {
            yield put(loginFailure('Falhou o login!'));
        }
    } catch (error) {
        console.error('problema', error);
        yield put(loginFailure('erro interno'));
    }
}


export default all([
    takeLatest(types.LOGIN_REQUEST, login),
]);