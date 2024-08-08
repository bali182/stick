import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ChordSymbol, HasId } from '../model/types'
import { initialState } from './initialState'
import { isNil } from '../model/isNil'

export type CreateChordPayload = { chord: ChordSymbol }
export type UpdateChordPayload = {
  chord: HasId & Partial<ChordSymbol>
}

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
  },
  selectors: {
    getChord: (state, id: string | undefined): ChordSymbol | undefined => {
      if (isNil(id)) {
        return undefined
      }
      return state[id]
    },
  },
})
