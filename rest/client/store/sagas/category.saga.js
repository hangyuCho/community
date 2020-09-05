import { all, fork, takeLatest } from 'redux-saga/effects';
import {
  CREATE_CATEGORY_REQUEST,
  DELETE_CATEGORY_REQUEST,
  GET_CATEGORY_LIST_REQUEST,
} from '../type';
import { createCategory } from '../actions/category/createCategory.action';
import { getCategoryList } from '../actions/category/getCategoryList.action';
import { deleteCategory } from '../actions/category/deleteCategory.action';

function* watchCreateCategory() {
  yield takeLatest(CREATE_CATEGORY_REQUEST, createCategory);
}

function* watchGetCategoryList() {
  yield takeLatest(GET_CATEGORY_LIST_REQUEST, getCategoryList);
}

function* watchDeleteCategory() {
  yield takeLatest(DELETE_CATEGORY_REQUEST, deleteCategory);
}

export default function* categorySaga() {
  yield all([
    fork(watchCreateCategory),
    fork(watchGetCategoryList),
    fork(watchDeleteCategory),
  ]);
}
