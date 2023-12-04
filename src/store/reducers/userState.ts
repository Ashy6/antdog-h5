import { createSlice } from '@reduxjs/toolkit'

/**
 * 存储用户信息的 store
 * sidebarVisiable 状态
 */
const userStateSlice = createSlice({
  name: 'userStore',
  initialState: {
    value: {
      sidebarVisiable: false,
      avatar: '',
      walletNo: '',
      balance: 0
    }
  },
  reducers: {
    // 更新 SideBar 的状态
    openSideBar: state => {
      state.value.sidebarVisiable = true
    },
    closeSideBar: state => {
      state.value.sidebarVisiable = false
    },
    // 用户信息
    updateUserStore: (state, action) => {
      state.value = { ...state.value, ...action.payload }
    }
  }
})

export const { openSideBar, closeSideBar, updateUserStore } =
  userStateSlice.actions
export default userStateSlice.reducer
