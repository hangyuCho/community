import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { SIGN_UP_FAIL, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from '../../type';

const signUpAPI = (data) => axios.post('/user/signup', data);

export const signUpRequestAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

export function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAIL,
      error: err.response.data,
    });
  }
}
