import { all, fork, takeLatest } from 'redux-saga/effects';
import {
  CREATE_NOTICE_REQUEST,
  DELETE_NOTICE_REQUEST,
  EDIT_NOTICE_REQUEST,
  GET_NOTICE_LIST_REQUEST,
  GET_NOTICE_REQUEST,
} from '../type';
import { createNotice } from '../actions/notice/createNotice.action';
import { getNoticeList } from '../actions/notice/getNoticeList.action';
import { getNotice } from '../actions/notice/getNotice.action';
import { editNotice } from '../actions/notice/editNotice.action';
import { deleteNotice } from '../actions/notice/deleteNotice.action';

function* watchCreateNotice() {
  yield takeLatest(CREATE_NOTICE_REQUEST, createNotice);
}

function* watchGetNoticeList() {
  yield takeLatest(GET_NOTICE_LIST_REQUEST, getNoticeList);
}

function* watchGetNotice() {
  yield takeLatest(GET_NOTICE_REQUEST, getNotice);
}

function* watchEditNotice() {
  yield takeLatest(EDIT_NOTICE_REQUEST, editNotice);
}

function* watchDeleteNotice() {
  yield takeLatest(DELETE_NOTICE_REQUEST, deleteNotice);
}

export default function* postSaga() {
  yield all([
    fork(watchCreateNotice),
    fork(watchGetNoticeList),
    fork(watchGetNotice),
    fork(watchEditNotice),
    fork(watchDeleteNotice),
  ]);
}
