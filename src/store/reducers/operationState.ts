import { createSlice } from '@reduxjs/toolkit'

/**
 * 业务信息 store
 * TODO：需要封装数据，定义数据
 */
const operationStateSlice = createSlice({
  name: 'operationInfoStore',
  initialState: { value: null },
  reducers: {
    updateSourceStore: (state, action) => {
      state.value = action.payload
    },
    clearSourceStore: state => {
      state.value = null
    }
  }
})

export const { updateSourceStore, clearSourceStore } = operationStateSlice.actions
export default operationStateSlice.reducer
