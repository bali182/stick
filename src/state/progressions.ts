import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ChordProgression } from '../model/types'
import { initialState } from './initialState'
import { isNil } from '../model/isNil'
import { updatePartial } from '../model/utils'

export type CrateProgressionPayload = { progression: ChordProgression }
export type UpdateProgressionPayload = {
  progressionId: string
  updates: Partial<ChordProgression>
}
export type AddBarsPayload = { progressionId: string; barIds: string[] }
export type RemoveBarsPayload = { progressionId: string; barIds: string[] }

export const progressionsSlice = createSlice({
  name: 'progressions',
  initialState: initialState.progressions,
  reducers: {
    createProgression: (
      state,
      { payload }: PayloadAction<CrateProgressionPayload>,
    ) => ({
      ...state,
      [payload.progression.id]: payload.progression,
    }),
    updateProgression: (
      state,
      action: PayloadAction<UpdateProgressionPayload>,
    ) =>
      updatePartial(
        state,
        action.payload.progressionId,
        action.payload.updates,
      ),
  },
  selectors: {
    getProgressions: (state): ChordProgression[] => {
      return Array.from(Object.values(state))
    },
    getProgression: (
      state,
      id: string | undefined,
    ): ChordProgression | undefined => {
      return isNil(id) ? undefined : state[id]
    },
    getDefaultProgression: (state): ChordProgression => {
      return state['default']!
    },
  },
})
