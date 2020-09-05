import { produce } from 'immer';
import {
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  EDIT_COMMENT_FAIL,
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_SUCCESS,
  GET_COMMENT_LIST_FAIL,
  GET_COMMENT_LIST_REQUEST,
  GET_COMMENT_LIST_SUCCESS,
} from '../type';

const initialState = {
  commentList: [],
  // 댓글 생성
  createCommentLoading: false,
  createCommentDone: false,
  createCommentError: null,
  // 댓글 리스트 불러오기
  getCommentListLoading: false,
  getCommentListDone: false,
  getCommentListError: null,
  // 댓글 불러오기
  getCommentLoading: false,
  getCommentDone: false,
  getCommentError: null,
  // 댓글 수정하기
  editCommentLoading: false,
  editCommentDone: false,
  editCommentError: null,
  // 댓글 수정하기
  deleteCommentLoading: false,
  deleteCommentDone: false,
  deleteCommentError: null,
};

// [action] action.type, action.payload
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // 댓글 생성
      case CREATE_COMMENT_REQUEST: {
        draft.createCommentLoading = true;
        draft.createCommentDone = false;
        draft.createCommentError = null;
        break;
      }
      case CREATE_COMMENT_SUCCESS: {
        draft.createCommentLoading = false;
        draft.createCommentDone = true;
        draft.createCommentError = null;
        draft.commentList.unshift(action.payload);
        break;
      }
      case CREATE_COMMENT_FAIL: {
        draft.createCommentLoading = false;
        draft.createCommentDone = false;
        draft.createCommentError = action.error;
        break;
      }
      // 댓글 생성
      case GET_COMMENT_LIST_REQUEST: {
        draft.getCommentListLoading = true;
        draft.getCommentListDone = false;
        draft.getCommentListError = null;
        break;
      }
      case GET_COMMENT_LIST_SUCCESS: {
        draft.getCommentListLoading = false;
        draft.getCommentListDone = true;
        draft.getCommentListError = null;
        draft.commentList = action.payload;
        break;
      }
      case GET_COMMENT_LIST_FAIL: {
        draft.getCommentListLoading = false;
        draft.getCommentListDone = false;
        draft.getCommentListError = action.error;
        break;
      }
      // 댓글 수정
      case EDIT_COMMENT_REQUEST: {
        draft.editCommentLoading = true;
        draft.editCommentDone = false;
        draft.editCommentError = null;
        break;
      }
      case EDIT_COMMENT_SUCCESS: {
        draft.editCommentLoading = false;
        draft.editCommentDone = true;
        draft.editCommentError = null;
        draft.commentList = draft.commentList.map((comment) =>
          comment.id === action.payload.id ? action.payload : comment
        );
        break;
      }
      case EDIT_COMMENT_FAIL: {
        draft.editCommentLoading = false;
        draft.editCommentDone = false;
        draft.editCommentError = action.error;
        break;
      }
      // 댓글 삭제
      case DELETE_COMMENT_REQUEST: {
        draft.deleteCommentLoading = true;
        draft.deleteCommentDone = false;
        draft.deleteCommentError = null;
        break;
      }
      case DELETE_COMMENT_SUCCESS: {
        draft.deleteCommentLoading = false;
        draft.deleteCommentDone = true;
        draft.deleteCommentError = null;
        draft.commentList = draft.commentList.filter(
          (comment) => comment.id !== action.payload
        );
        break;
      }
      case DELETE_COMMENT_FAIL: {
        draft.deleteCommentLoading = false;
        draft.deleteCommentDone = false;
        draft.deleteCommentError = action.error;
        break;
      }
      default:
        break;
    }
  });

export default reducer;
