import { produce } from 'immer';
import {
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  GET_CATEGORY_LIST_FAIL,
  GET_CATEGORY_LIST_REQUEST,
  GET_CATEGORY_LIST_SUCCESS,
} from '../type';

const initialState = {
  categoryList: [],
  // 카테고리 생성
  createCategoryDone: false,
  createCategoryLoading: false,
  createCategoryError: false,
  // 카테고리 리스트
  getCategoryListDone: false,
  getCategoryListLoading: false,
  getCategoryListError: false,
  // 카테고리 삭제
  deleteCategoryDone: false,
  deleteCategoryLoading: false,
  deleteCategoryError: false,
};

// [action] action.type, action.payload
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // 카테고리 생성
      case CREATE_CATEGORY_REQUEST: {
        draft.createCategoryLoading = true;
        draft.createCategoryDone = false;
        draft.createCategoryError = null;
        break;
      }
      case CREATE_CATEGORY_SUCCESS: {
        draft.createCategoryLoading = false;
        draft.createCategoryDone = true;
        draft.createCategoryError = null;
        draft.categoryList.unshift(action.payload);
        break;
      }
      case CREATE_CATEGORY_FAIL: {
        draft.createCategoryLoading = false;
        draft.createCategoryDone = false;
        draft.createCategoryError = action.error;
        break;
      }
      // 카테고리 생성
      case GET_CATEGORY_LIST_REQUEST: {
        draft.getCategoryListLoading = true;
        draft.getCategoryListDone = false;
        draft.getCategoryListError = null;
        break;
      }
      case GET_CATEGORY_LIST_SUCCESS: {
        draft.getCategoryListLoading = false;
        draft.getCategoryListDone = true;
        draft.getCategoryListError = null;
        draft.categoryList = action.payload;
        break;
      }
      case GET_CATEGORY_LIST_FAIL: {
        draft.getCategoryListLoading = false;
        draft.getCategoryListDone = false;
        draft.getCategoryListError = action.error;
        break;
      }
      // 카테고리 삭제
      case DELETE_CATEGORY_REQUEST: {
        draft.deleteCategoryLoading = true;
        draft.deleteCategoryDone = false;
        draft.deleteCategoryError = null;
        break;
      }
      case DELETE_CATEGORY_SUCCESS: {
        draft.deleteCategoryLoading = false;
        draft.deleteCategoryDone = true;
        draft.deleteCategoryError = null;
        draft.categoryList = draft.categoryList.filter(
          (catrgory) => catrgory.id !== action.payload
        );
        break;
      }
      case DELETE_CATEGORY_FAIL: {
        draft.deleteCategoryLoading = false;
        draft.deleteCategoryDone = false;
        draft.deleteCategoryError = action.error;
        break;
      }
      default:
        break;
    }
  });

export default reducer;
