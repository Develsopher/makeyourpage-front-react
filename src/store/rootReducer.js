import { combineReducers } from '@reduxjs/toolkit';

import user from 'store/module/user';

const rootReducer = combineReducers({
  // 리듀서들 추가하기
  user,
});

export default rootReducer;
