import { types } from './types';


export function loginRequest(email, password) {
  return {
    type: types.LOGIN_REQUEST,
    payload: { email, password },
  };
}


export function loginSuccess(token, user) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: { token, user },
  };
}


export function loginFailure(errorMessage) {
  return {
    type: types.LOGIN_FAILURE,
    payload: { error: errorMessage },
  };
}