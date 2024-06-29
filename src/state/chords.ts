import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ChordSymbol, HasId } from '../model/chartModel'
import { removeByKey, removeByKeys } from '../model/utils'

export type ChordSymbolsState = Record<string, ChordSymbol>

export type CreateChordPayload = { chord: ChordSymbol }
export type UpdateChordPayload = {
  chord: HasId & Partial<ChordSymbol>
}
export type DeleteChordPayload = { chordId: string }
export type DeleteChordsPayload = { chordIds: string[] }

const initialState: ChordSymbolsState = {
  'default-first-bar-dm': {
    id: 'default-first-bar-dm',
    name: 'D',
    type: 'MINOR',
    root: 'D2',
  },
  'default-second-bar-f': {
    id: 'default-second-bar-f',
    name: 'F',
    type: 'MAJOR',
    root: 'F1',
  },
  'default-third-bar-bb': {
    id: 'default-third-bar-bb',
    name: 'Bb',
    type: 'MAJOR',
    root: 'Bb1',
  },
  'default-fourth-bar-g': {
    id: 'default-fourth-bar-g',
    name: 'G',
    type: 'MAJOR',
    root: 'G1',
  },
  'default-fourth-bar-a': {
    id: 'default-fourth-bar-a',
    name: 'A',
    type: 'DOMINANT-SEVENTH',
    root: 'A1',
  },
}

const chordsSlice = createSlice({
  name: 'chords',
  initialState,
  reducers: {
    createChord: (state, { payload }: PayloadAction<CreateChordPayload>) => ({
      ...state,
      [payload.chord.id]: payload.chord,
    }),
    updateChord: (state, { payload }: PayloadAction<UpdateChordPayload>) => {
      const chord = state[payload.chord.id]
      if (!chord) {
        return state
      }
      return {
        ...state,
        [payload.chord.id]: { ...chord, ...payload.chord },
      }
    },
    deleteChord: (state, { payload }: PayloadAction<DeleteChordPayload>) =>
      removeByKey(payload.chordId, state),

    deleteChords: (state, { payload }: PayloadAction<DeleteChordsPayload>) =>
      removeByKeys(payload.chordIds, state),
  },
  selectors: {
    getChord: (state, id: string): ChordSymbol | undefined => {
      return state[id]
    },
  },
})

export const { createChord, deleteChord, deleteChords, updateChord } =
  chordsSlice.actions
export const { reducer: chordsReducer } = chordsSlice
export const { getChord } = chordsSlice.selectors
