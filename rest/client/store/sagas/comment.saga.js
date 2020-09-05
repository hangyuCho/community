import { all, fork, takeLatest } from 'redux-saga/effects';
import {
  CREATE_COMMENT_REQUEST,
  DELETE_COMMENT_REQUEST,
  EDIT_COMMENT_REQUEST,
  GET_COMMENT_LIST_REQUEST,
} from '../type';
import { createComment } from '../actions/comment/createComment.action';
import { getCommentList } from '../actions/comment/getCommentList.action';
import { editComment } from '../actions/comment/editComment.action';
import { deleteComment } from '../actions/comment/deleteComment.action';

function* watchCreateComment() {
  yield takeLatest(CREATE_COMMENT_REQUEST, createComment);
}

function* watchGetCommentList() {
  yield takeLatest(GET_COMMENT_LIST_REQUEST, getCommentList);
}

function* watchEditComment() {
  yield takeLatest(EDIT_COMMENT_REQUEST, editComment);
}

function* watchDeleteComment() {
  yield takeLatest(DELETE_COMMENT_REQUEST, deleteComment);
}

export default function* commentSaga() {
  yield all([
    fork(watchCreateComment),
    fork(watchGetCommentList),
    fork(watchEditComment),
    fork(watchDeleteComment),
  ]);
}
