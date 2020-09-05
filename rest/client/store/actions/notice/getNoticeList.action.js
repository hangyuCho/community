import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_NOTICE_LIST_FAIL,
  GET_NOTICE_LIST_REQUEST,
  GET_NOTICE_LIST_SUCCESS,
} from '../../type';

export const getNoticeListRequestAction = (data) => {
  console.log(data);

  return {
    type: GET_NOTICE_LIST_REQUEST,
    data,
  };
};

const getNoticeListAPI = (data) => {
  const limit = data?.limit;

  return axios.get(`/notice/all?${limit && `limit=${limit}`}`);
};

export function* getNoticeList(action) {
  try {
    const result = yield call(getNoticeListAPI, action.data);
    yield put({
      type: GET_NOTICE_LIST_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: GET_NOTICE_LIST_FAIL,
      error: err.response.data,
    });
  }
}
