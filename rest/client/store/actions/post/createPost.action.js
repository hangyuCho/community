import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
} from '../../type';

export const createPostRequestAction = (data) => ({
  type: CREATE_POST_REQUEST,
  data,
});

const createPostAPI = (data) => axios.post('/post/create', data);

export function* createPost(action) {
  try {
    const result = yield call(createPostAPI, action.data);
    yield put({
      type: CREATE_POST_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: CREATE_POST_FAIL,
      error: err.response.data,
    });
  }
}
