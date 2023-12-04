import { configureStore } from '@reduxjs/toolkit';
import userStateReducer from './reducers/userState';
import operationStateReducer from './reducers/operationState';

const store = configureStore({
  reducer: {
    // 用户相关内容，SideBar 内容
    user: userStateReducer,
    // 业务信息 store
    operationInfo: operationStateReducer,
  }
});

export default store;

