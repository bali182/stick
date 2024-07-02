import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PitchedNote } from '../model/types'
import { initialState } from './initialState'

export type ConfigState = { tuning: PitchedNote[] }

export type UpdateConfigPayload = Partial<ConfigState>

const configSlice = createSlice({
  name: 'config',
  initialState: initialState.config,
  reducers: {
    updateConfig: (state, { payload }: PayloadAction<UpdateConfigPayload>) => ({
      ...state,
      ...payload,
    }),
  },
  selectors: {
    getTuning: (state) => state.tuning,
  },
})

export const { updateConfig } = configSlice.actions
export const { reducer: configReducer } = configSlice
export const { getTuning } = configSlice.selectors
