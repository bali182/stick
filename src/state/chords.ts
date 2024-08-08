import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ChordSymbol } from '../model/types'
import { initialState } from './initialState'
import { isNil } from '../model/isNil'
import { updatePartial } from '../model/utils'

export type CreateChordPayload = { chord: ChordSymbol }
export type UpdateChordPayload = {
  chordId: string
  updates: Partial<ChordSymbol>
}

export const chordsSlice = createSlice({
  name: 'chords',
  initialState: initialState.chords,
  reducers: {
    createChord: (state, { payload }: PayloadAction<CreateChordPayload>) => ({
      ...state,
      [payload.chord.id]: payload.chord,
    }),
    updateChord: (state, action: PayloadAction<UpdateChordPayload>) =>
      updatePartial(state, action.payload.chordId, action.payload.updates),
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
