import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  DELETE_NOTICE_FAIL,
  DELETE_NOTICE_REQUEST,
  DELETE_NOTICE_SUCCESS,
} from '../../type';

export const deleteNoticeRequestAction = (data) => ({
  type: DELETE_NOTICE_REQUEST,
  data,
});

const deleteNoticeAPI = (data) => axios.delete(`/notice/${data}/delete`);

export function* deleteNotice(action) {
  try {
    const result = yield call(deleteNoticeAPI, action.data);
    yield put({
      type: DELETE_NOTICE_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_NOTICE_FAIL,
      error: err.response.data,
    });
  }
}
