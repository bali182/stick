import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { BarModel } from '../model/chartModel'
import { removeByKey } from '../model/utils'

export type BarsState = Record<string, BarModel>

export type CrateBarPayload = { bar: BarModel }
export type DeleteBarPayload = { barId: string }
export type UpdateBarPayload = { bar: BarModel }
export type AddChordsPayload = { barId: string; chordIds: string[] }
export type RemoveChordsPayload = { barId: string; chordIds: string[] }

const initialState: BarsState = {
  'default-first-bar': {
    id: 'default-first-bar',
    chords: ['default-first-bar-dm'],
  },
  'default-second-bar': {
    id: 'default-second-bar',
    chords: ['default-second-bar-f'],
  },
  'default-third-bar': {
    id: 'default-third-bar',
    chords: ['default-third-bar-bb'],
  },
  'default-fourth-bar': {
    id: 'default-fourth-bar',
    chords: ['default-fourth-bar-g', 'default-fourth-bar-a'],
  },
}

const barsSlice = createSlice({
  name: 'bars',
  initialState,
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
    getBar: (state, id: string): BarModel | undefined => {
      return state[id]
    },
  },
})

export const { addChords, removeChords, createBar, updateBar, deleteBar } =
  barsSlice.actions
export const { reducer: barsReducer } = barsSlice
export const { getBar } = barsSlice.selectors
