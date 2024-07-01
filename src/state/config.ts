import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PitchedNote } from '../model/types'
import { getFretboardLocations } from './getFretboardLocations'

export type ConfigState = { tuning: PitchedNote[] }

export type UpdateConfigPayload = Partial<ConfigState>

const initialState: ConfigState = {
  tuning: ['G2', 'D2', 'A1', 'E1'],
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
