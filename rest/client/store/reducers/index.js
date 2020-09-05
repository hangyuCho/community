import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import postReducer from './post.reducer';
import commentReducer from './comment.reducer';
import categoryReducer from './category.reducer';
import noticeReducer from './notice.reducer';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        userReducer,
        postReducer,
        commentReducer,
        categoryReducer,
        noticeReducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
