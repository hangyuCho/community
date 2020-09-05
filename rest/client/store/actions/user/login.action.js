import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../../type';

export const logInRequestAction = (data) => ({
  type: LOGIN_REQUEST,
  data,
});

const logInAPI = (data) => axios.post('/user/login', data);

export function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOGIN_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAIL,
      error: err.response.data,
    });
  }
}
