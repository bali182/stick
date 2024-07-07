import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ChordSymbol, HasId } from '../model/types'
import { removeByKey, removeByKeys } from '../model/utils'
import { initialState } from './initialState'

export type CreateChordPayload = { chord: ChordSymbol }
export type UpdateChordPayload = {
  chord: HasId & Partial<ChordSymbol>
}
export type DeleteChordPayload = { chordId: string }
export type DeleteChordsPayload = { chordIds: string[] }

export const chordsSlice = createSlice({
  name: 'chords',
  initialState: initialState.chords,
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
