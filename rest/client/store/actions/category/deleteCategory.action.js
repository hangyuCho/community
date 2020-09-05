import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
} from '../../type';

export const deleteCategoryRequestAction = (data) => ({
  type: DELETE_CATEGORY_REQUEST,
  data,
});

// data => category Id
const deleteCategoryAPI = (data) =>
  axios.delete(`/post/category/${data}/delete`);

export function* deleteCategory(action) {
  try {
    const result = yield call(deleteCategoryAPI, action.data);
    yield put({
      type: DELETE_CATEGORY_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_CATEGORY_FAIL,
      error: err.response.data,
    });
  }
}
