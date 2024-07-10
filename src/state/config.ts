import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { ConfigState } from './types'

export type UpdateConfigPayload = Partial<ConfigState>

export const configSlice = createSlice({
  name: 'config',
  initialState: initialState.config,
  reducers: {
    updateConfig: (state, { payload }: PayloadAction<UpdateConfigPayload>) => ({
      ...state,
      ...payload,
    }),
  },
  selectors: {
    getActiveProgressionId: (state: ConfigState) => state.progressionId,
  },
})
