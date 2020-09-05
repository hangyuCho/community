import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LIKE_POST_FAIL,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
} from '../../type';

export const likePostRequestAction = (data) => ({
  type: LIKE_POST_REQUEST,
  data,
});

const likePostAPI = (data) => axios.patch(`/post/${data}/like`);

export function* likePost(action) {
  try {
    const result = yield call(likePostAPI, action.data);
    yield put({
      type: LIKE_POST_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: LIKE_POST_FAIL,
      error: err.response.data,
    });
  }
}
