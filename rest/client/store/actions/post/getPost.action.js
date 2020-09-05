import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_POST_FAIL, GET_POST_REQUEST, GET_POST_SUCCESS } from '../../type';

export const getPostRequestAction = (data) => ({
  type: GET_POST_REQUEST,
  data,
});

// data => postId
const getPostAPI = (data) => axios.get(`/post/${data}`);

export function* getPost(action) {
  try {
    const result = yield call(getPostAPI, action.data);
    yield put({
      type: GET_POST_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: GET_POST_FAIL,
      error: err.response.data,
    });
  }
}
