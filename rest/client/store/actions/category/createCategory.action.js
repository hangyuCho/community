import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
} from '../../type';

export const createCategoryRequestAction = (data) => ({
  type: CREATE_CATEGORY_REQUEST,
  data,
});

// data => formData
const createCategoryAPI = (data) => axios.post('/post/category/create', data);

export function* createCategory(action) {
  try {
    const result = yield call(createCategoryAPI, action.data);
    yield put({
      type: CREATE_CATEGORY_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: CREATE_CATEGORY_FAIL,
      error: err.response.data,
    });
  }
}
