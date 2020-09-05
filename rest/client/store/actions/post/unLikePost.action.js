import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  UNLIKE_POST_FAIL,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
} from '../../type';

export const unLikePostRequestAction = (data) => ({
  type: UNLIKE_POST_REQUEST,
  data,
});

const unLikePostAPI = (data) => axios.patch(`/post/${data}/unlike`);

export function* unLikePost(action) {
  try {
    const result = yield call(unLikePostAPI, action.data);
    yield put({
      type: UNLIKE_POST_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: UNLIKE_POST_FAIL,
      error: err.response.data,
    });
  }
}
