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
      walletNo: '',
      balance: 0,
    }
  },
  reducers: {
    // 更新积分 store
    openSideBar: (state) => {
      state.value.sidebarVisiable = true
    },
    closeSideBar: (state) => {
      state.value.sidebarVisiable = false
    }
  }
})

export const { openSideBar, closeSideBar } = userStateSlice.actions
export default userStateSlice.reducer
