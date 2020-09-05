import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  CREATE_NOTICE_FAIL,
  CREATE_NOTICE_REQUEST,
  CREATE_NOTICE_SUCCESS,
} from '../../type';

export const createNoticeRequestAction = (data) => ({
  type: CREATE_NOTICE_REQUEST,
  data,
});

const createNoticeAPI = (data) => axios.post('/notice/create', data);

export function* createNotice(action) {
  try {
    const result = yield call(createNoticeAPI, action.data);
    yield put({
      type: CREATE_NOTICE_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: CREATE_NOTICE_FAIL,
      error: err.response.data,
    });
  }
}
