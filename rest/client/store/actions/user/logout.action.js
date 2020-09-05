import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../../type';

const logOutAPI = () => axios.post('/user/logout');

export const logOutRequestAction = () => ({
  type: LOGOUT_REQUEST,
});

export function* logOut() {
  try {
    const result = yield call(logOutAPI);
    yield put({
      type: LOGOUT_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: LOGOUT_FAIL,
      error: err.response.data,
    });
  }
}
