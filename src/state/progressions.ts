import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ChordProgression, HasId } from '../model/types'
import { initialState } from './initialState'
import { ProgressionsState } from './types'
import { isNil } from '../model/isNil'

export type CrateProgressionPayload = { progression: ChordProgression }
export type UpdateProgressionPayload = {
  progression: HasId & Partial<ChordProgression>
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
      { payload }: PayloadAction<UpdateProgressionPayload>,
    ) => {
      const progression = state[payload.progression.id]
      if (!progression) {
        return state
      }
      return {
        ...state,
        [payload.progression.id]: { ...progression, ...payload.progression },
      }
    },
    addBars: (
      state,
      { payload }: PayloadAction<AddBarsPayload>,
    ): ProgressionsState => {
      const progression = state[payload.progressionId]
      if (!progression) {
        return state
      }
      return {
        ...state,
        [payload.progressionId]: {
          ...progression,
          bars: [...progression.bars, ...payload.barIds],
        },
      }
    },
    removeBars: (
      state,
      { payload }: PayloadAction<RemoveBarsPayload>,
    ): ProgressionsState => {
      const progression = state[payload.progressionId]
      if (!progression) {
        return state
      }
      return {
        ...state,
        [payload.progressionId]: {
          ...progression,
          bars: progression.bars.filter((id) => !payload.barIds.includes(id)),
        },
      }
    },
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
