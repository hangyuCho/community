import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_NOTICE_FAIL,
  GET_NOTICE_REQUEST,
  GET_NOTICE_SUCCESS,
} from '../../type';

export const getNoticeRequestAction = (data) => ({
  type: GET_NOTICE_REQUEST,
  data,
});

// data => postId
const getNoticeAPI = (data) => axios.get(`/notice/${data}`);

export function* getNotice(action) {
  try {
    const result = yield call(getNoticeAPI, action.data);
    yield put({
      type: GET_NOTICE_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: GET_NOTICE_FAIL,
      error: err.response.data,
    });
  }
}
