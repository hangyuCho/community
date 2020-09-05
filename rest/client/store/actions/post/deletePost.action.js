import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  DELETE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
} from '../../type';

export const deletePostRequestAction = (data) => ({
  type: DELETE_POST_REQUEST,
  data,
});

const deletePostAPI = (data) => axios.delete(`/post/${data}/delete`);

export function* deletePost(action) {
  try {
    const result = yield call(deletePostAPI, action.data);
    yield put({
      type: DELETE_POST_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_POST_FAIL,
      error: err.response.data,
    });
  }
}
