import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  EDIT_COMMENT_FAIL,
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_SUCCESS,
} from '../../type';

export const editCommentRequestAction = (data) => ({
  type: EDIT_COMMENT_REQUEST,
  data,
});

const editCommentAPI = (data) =>
  axios.put(
    `/post/${data.postId}/comment/${data.commentId}/edit`,
    data.formData
  );

export function* editComment(action) {
  try {
    const result = yield call(editCommentAPI, action.data);
    yield put({
      type: EDIT_COMMENT_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: EDIT_COMMENT_FAIL,
      error: err.response.data,
    });
  }
}
