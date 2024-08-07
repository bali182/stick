import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Bar } from '../model/types'
import { removeByKey } from '../model/utils'
import { initialState } from './initialState'
import { isNil } from '../model/isNil'

export type CrateBarPayload = { bar: Bar }
export type DeleteBarPayload = { barId: string }
export type UpdateBarPayload = { bar: Bar }
export type AddChordsPayload = { barId: string; chordIds: string[] }
export type RemoveChordsPayload = { barId: string; chordIds: string[] }

export const barsSlice = createSlice({
  name: 'bars',
  initialState: initialState.bars,
  reducers: {
    createBar: (state, { payload }: PayloadAction<CrateBarPayload>) => ({
      ...state,
      [payload.bar.id]: payload.bar,
    }),
    updateBar: (state, { payload }: PayloadAction<UpdateBarPayload>) => ({
      ...state,
      [payload.bar.id]: payload.bar,
    }),
    deleteBar: (state, { payload }: PayloadAction<DeleteBarPayload>) =>
      removeByKey(payload.barId, state),

    addChords: (state, { payload }: PayloadAction<AddChordsPayload>) => {
      const bar = state[payload.barId]
      if (!bar) {
        return state
      }
      return {
        ...state,
        [payload.barId]: {
          ...bar,
          chords: [...bar.chords, ...payload.chordIds],
        },
      }
    },
    removeChords: (state, { payload }: PayloadAction<RemoveChordsPayload>) => {
      const bar = state[payload.barId]
      if (!bar) {
        return state
      }
      return {
        ...state,
        [payload.barId]: {
          ...bar,
          chords: bar.chords.filter((id) => !payload.chordIds.includes(id)),
        },
      }
    },
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
