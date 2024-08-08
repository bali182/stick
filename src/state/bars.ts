import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Bar } from '../model/types'
import { initialState } from './initialState'
import { isNil } from '../model/isNil'
import { BarsState } from './types'
import { updatePartial } from '../model/utils'

export type CrateBarPayload = { bar: Bar }
export type UpdateBarPayload = { barId: string; updates: Partial<Bar> }

export const barsSlice = createSlice({
  name: 'bars',
  initialState: initialState.bars,
  reducers: {
    createBar: (state, { payload }: PayloadAction<CrateBarPayload>) => ({
      ...state,
      [payload.bar.id]: payload.bar,
    }),
    updateBar: (state, action: PayloadAction<UpdateBarPayload>): BarsState =>
      updatePartial(state, action.payload.barId, action.payload.updates),
  },
  selectors: {
    getBar: (state, id: string | undefined): Bar | undefined => {
      if (isNil(id)) {
        return undefined
      }
      return state[id]
    },
  },
})
