import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
} from '../../type';

export const deleteCommentRequestAction = (data) => ({
  type: DELETE_COMMENT_REQUEST,
  data,
});

const deleteCommentAPI = (data) =>
  axios.delete(`/post/${data.postId}/comment/${data.commentId}/delete`);

export function* deleteComment(action) {
  console.log(action.data);
  try {
    const result = yield call(deleteCommentAPI, action.data);
    yield put({
      type: DELETE_COMMENT_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_COMMENT_FAIL,
      error: err.response.data,
    });
  }
}
