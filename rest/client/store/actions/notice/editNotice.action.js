import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  EDIT_NOTICE_FAIL,
  EDIT_NOTICE_REQUEST,
  EDIT_NOTICE_SUCCESS,
} from '../../type';

export const editNoticeRequestAction = (data) => ({
  type: EDIT_NOTICE_REQUEST,
  data,
});

const editNoticeAPI = (data) =>
  axios.put(`/notice/${data.noticeId}/edit`, data.formData);

export function* editNotice(action) {
  try {
    const result = yield call(editNoticeAPI, action.data);
    yield put({
      type: EDIT_NOTICE_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: EDIT_NOTICE_FAIL,
      error: err.response.data,
    });
  }
}
