import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ConfigState = {}

export type UpdateConfigPayload = Partial<ConfigState>

const initialState: ConfigState = {}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    updateConfig: (state, { payload }: PayloadAction<UpdateConfigPayload>) => ({
      ...state,
      ...payload,
    }),
  },
  selectors: {},
})

export const { updateConfig } = configSlice.actions
export const { reducer: configReducer } = configSlice
export const {} = configSlice.selectors
