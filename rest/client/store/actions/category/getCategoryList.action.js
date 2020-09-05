import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_CATEGORY_LIST_FAIL,
  GET_CATEGORY_LIST_REQUEST,
  GET_CATEGORY_LIST_SUCCESS,
} from '../../type';

export const getCategoryListRequestAction = () => ({
  type: GET_CATEGORY_LIST_REQUEST,
});

const getCategoryListAPI = () => axios.get('/post/category/all');

export function* getCategoryList() {
  try {
    const result = yield call(getCategoryListAPI);
    yield put({
      type: GET_CATEGORY_LIST_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: GET_CATEGORY_LIST_FAIL,
      error: err.response.data,
    });
  }
}
