import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_ME_FAIL, LOAD_ME_REQUEST, LOAD_ME_SUCCESS } from '../../type';

export const loadMeRequestAction = () => ({
  type: LOAD_ME_REQUEST,
});

const loadMeAPI = () => axios.get('/user/loadme');

export function* loadMe() {
  try {
    const result = yield call(loadMeAPI);
    yield put({
      type: LOAD_ME_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_ME_FAIL,
      error: err.response.data,
    });
  }
}
