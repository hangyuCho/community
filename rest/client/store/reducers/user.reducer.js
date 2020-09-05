import { produce } from 'immer';
import {
  LOAD_ME_FAIL,
  LOAD_ME_REQUEST,
  LOAD_ME_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  CLEAR_USER,
} from '../type';

const initialState = {
  me: null,
  // 회원가입
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  // 로그인
  logInLoading: false,
  logInDone: false,
  logInError: null,
  // 로그아웃
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  // 자기정보 불러오기
  loadMeLoading: false,
  loadMeDone: false,
  loadMeError: null,
  // 유저정보 불러오기
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
};

// [action] action.type, action.payload
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // 회원가입
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        draft.signUpError = null;
        break;
      case SIGN_UP_FAIL:
        draft.signUpLoading = false;
        draft.signUpDone = false;
        draft.signUpError = action.error;
        break;
      // 로그인
      case LOGIN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOGIN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.logInError = null;
        break;
      case LOGIN_FAIL:
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = action.error;
        break;
      // 로그아웃
      case LOGOUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOGOUT_SUCCESS:
        draft.me = null;
        draft.signUpLoading = false;
        draft.signUpDone = false;
        draft.signUpError = null;
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = null;
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logOutError = null;
        draft.loadMeLoading = false;
        draft.loadMeDone = false;
        draft.loadMeError = null;
        draft.loadUserLoading = false;
        draft.loadUserDone = false;
        draft.loadUserError = null;
        break;
      case LOGOUT_FAIL:
        draft.logOutLoading = false;
        draft.logOutDone = false;
        draft.logOutError = action.error;
        break;
      // 자기정보 불러오기
      case LOAD_ME_REQUEST:
        draft.loadMeLoading = true;
        draft.loadMeDone = false;
        draft.loadMeError = null;
        break;
      case LOAD_ME_SUCCESS: {
        draft.loadMeLoading = false;
        draft.loadMeDone = true;
        draft.loadMeError = null;
        draft.me = action.payload;
        break;
      }
      case LOAD_ME_FAIL:
        draft.loadMeLoading = false;
        draft.loadMeDone = false;
        draft.loadMeError = action.error;
        break;
      // 유저정보 불러오기
      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        draft.loadUserError = null;
        break;
      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        draft.loadUserError = null;
        break;
      case LOAD_USER_FAIL:
        draft.loadUserLoading = false;
        draft.loadUserDone = false;
        draft.loadUserError = action.error;
        break;
      case CLEAR_USER:
        draft.me = null;
        draft.signUpLoading = false;
        draft.signUpDone = false;
        draft.signUpError = null;
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = null;
        draft.logOutLoading = false;
        draft.logOutDone = false;
        draft.logOutError = null;
        draft.loadMeLoading = false;
        draft.loadMeDone = false;
        draft.loadMeError = null;
        draft.loadUserLoading = false;
        draft.loadUserDone = false;
        draft.loadUserError = null;
        break;
      default:
        break;
    }
  });

export default reducer;
