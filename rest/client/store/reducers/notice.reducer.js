import { produce } from 'immer';
import {
  CREATE_NOTICE_FAIL,
  CREATE_NOTICE_REQUEST,
  CREATE_NOTICE_SUCCESS,
  DELETE_NOTICE_FAIL,
  DELETE_NOTICE_REQUEST,
  DELETE_NOTICE_SUCCESS,
  EDIT_NOTICE_FAIL,
  EDIT_NOTICE_REQUEST,
  EDIT_NOTICE_SUCCESS,
  GET_NOTICE_FAIL,
  GET_NOTICE_LIST_FAIL,
  GET_NOTICE_LIST_REQUEST,
  GET_NOTICE_LIST_SUCCESS,
  GET_NOTICE_REQUEST,
  GET_NOTICE_SUCCESS,
} from '../type';

const initialState = {
  noticeList: [],
  notice: null,
  // Notice 생성
  createNoticeLoading: false,
  createNoticeDone: false,
  createNoticeError: null,
  // Notice 리스트 불러오기
  getNoticeListLoading: false,
  getNoticeListDone: false,
  getNoticeListError: null,
  // Notice 불러오기
  getNoticeLoading: false,
  getNoticeDone: false,
  getNoticeError: null,
  // Notice 수정하기
  editNoticeLoading: false,
  editNoticeDone: false,
  editNoticeError: null,
  // Notice 삭제하기
  deleteNoticeLoading: false,
  deleteNoticeDone: false,
  deleteNoticeError: null,
};

// [action] action.type, action.payload
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // 포스트 생성
      case CREATE_NOTICE_REQUEST: {
        draft.createNoticeLoading = true;
        draft.createNoticeDone = false;
        draft.createNoticeError = null;
        break;
      }
      case CREATE_NOTICE_SUCCESS: {
        draft.createNoticeLoading = false;
        draft.createNoticeDone = true;
        draft.createNoticeError = null;
        draft.notice = action.payload;
        break;
      }
      case CREATE_NOTICE_FAIL: {
        draft.createNoticeLoading = false;
        draft.createNoticeDone = false;
        draft.createNoticeError = action.error;
        break;
      }
      // 포스트 리스트 불러오기
      case GET_NOTICE_LIST_REQUEST: {
        draft.getNoticeListLoading = true;
        draft.getNoticeListDone = false;
        draft.getNoticeListError = null;
        break;
      }
      case GET_NOTICE_LIST_SUCCESS: {
        draft.getNoticeListLoading = false;
        draft.getNoticeListDone = true;
        draft.getNoticeListError = null;
        draft.noticeList = action.payload;
        break;
      }
      case GET_NOTICE_LIST_FAIL: {
        draft.getNoticeListLoading = false;
        draft.getNoticeListDone = false;
        draft.getNoticeListError = action.error;
        break;
      }
      // 포스트 불러오기
      case GET_NOTICE_REQUEST: {
        draft.getNoticeLoading = true;
        draft.getNoticeDone = false;
        draft.getNoticeError = null;
        break;
      }
      case GET_NOTICE_SUCCESS: {
        draft.getNoticeLoading = false;
        draft.getNoticeDone = true;
        draft.getNoticeError = null;
        draft.notice = action.payload;
        break;
      }
      case GET_NOTICE_FAIL: {
        draft.getNoticeLoading = false;
        draft.getNoticeDone = false;
        draft.getNoticeError = action.error;
        break;
      }
      // 포스트 수정하기
      case EDIT_NOTICE_REQUEST: {
        draft.editNoticeLoading = true;
        draft.editNoticeDone = false;
        draft.editNoticeError = null;
        break;
      }
      case EDIT_NOTICE_SUCCESS: {
        draft.editNoticeLoading = false;
        draft.editNoticeDone = true;
        draft.editNoticeError = null;
        draft.notice = action.payload;
        break;
      }
      case EDIT_NOTICE_FAIL: {
        draft.editNoticeLoading = false;
        draft.editNoticeDone = false;
        draft.editNoticeError = action.error;
        break;
      }
      // 포스트 삭제
      case DELETE_NOTICE_REQUEST: {
        draft.deleteNoticeLoading = true;
        draft.deleteNoticeDone = false;
        draft.deleteNoticeError = null;
        break;
      }
      case DELETE_NOTICE_SUCCESS: {
        draft.deleteNoticeLoading = false;
        draft.deleteNoticeDone = true;
        draft.deleteNoticeError = null;
        draft.noticeList = draft.noticeList.filter(
          (notice) => notice.id !== action.payload
        );
        draft.notice = null;
        break;
      }
      case DELETE_NOTICE_FAIL: {
        draft.deleteNoticeLoading = false;
        draft.deleteNoticeDone = false;
        draft.deleteNoticeError = action.error;
        break;
      }
      default:
        break;
    }
  });

export default reducer;
