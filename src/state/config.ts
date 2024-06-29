import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PitchedNote } from '../model/types'

export type ConfigState = { tuning: PitchedNote[] }

export type UpdateConfigPayload = Partial<ConfigState>

const initialState: ConfigState = {
  tuning: ['E1', 'A1', 'D2', 'G2'],
}

const configSlice = createSlice({
  name: 'config',
  initialState,
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
