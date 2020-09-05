import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  EDIT_POST_FAIL,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
} from '../../type';

export const editPostRequestAction = (data) => ({
  type: EDIT_POST_REQUEST,
  data,
});

const editPostAPI = (data) =>
  axios.put(`/post/${data.postId}/edit`, data.formData);

export function* editPost(action) {
  try {
    const result = yield call(editPostAPI, action.data);
    yield put({
      type: EDIT_POST_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: EDIT_POST_FAIL,
      error: err.response.data,
    });
  }
}
