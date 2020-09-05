import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_COMMENT_LIST_FAIL,
  GET_COMMENT_LIST_REQUEST,
  GET_COMMENT_LIST_SUCCESS,
} from '../../type';

export const getCommentListRequestAction = (data) => ({
  type: GET_COMMENT_LIST_REQUEST,
  data,
});

const getCommentListAPI = (data) => axios.get(`/post/${data}/comment/all`);

export function* getCommentList(action) {
  try {
    const result = yield call(getCommentListAPI, action.data);
    yield put({
      type: GET_COMMENT_LIST_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: GET_COMMENT_LIST_FAIL,
      error: err.response.data,
    });
  }
}
