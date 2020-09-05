import { all, fork, takeLatest } from 'redux-saga/effects';
import {
  LOAD_ME_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  SIGN_UP_REQUEST,
} from '../type';
import { logIn } from '../actions/user/login.action';
import { signUp } from '../actions/user/signup.action';
import { loadMe } from '../actions/user/loadme.action';
import { logOut } from '../actions/user/logout.action';

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchLogIn() {
  yield takeLatest(LOGIN_REQUEST, logIn);
}
function* watchLoadMe() {
  yield takeLatest(LOAD_ME_REQUEST, loadMe);
}
function* watchLogOut() {
  yield takeLatest(LOGOUT_REQUEST, logOut);
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogIn),
    fork(watchLoadMe),
    fork(watchLogOut),
  ]);
}
