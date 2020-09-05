import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
} from '../../type';

export const createCommentRequestAction = (data) => ({
  type: CREATE_COMMENT_REQUEST,
  data,
});

const createCommentAPI = (data) =>
  axios.post(`/post/${data.postId}/comment/create`, data.formData);

export function* createComment(action) {
  try {
    const result = yield call(createCommentAPI, action.data);
    yield put({
      type: CREATE_COMMENT_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: CREATE_COMMENT_FAIL,
      error: err.response.data,
    });
  }
}
