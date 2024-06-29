import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ChordProgression } from '../model/types'
import { removeByKey } from '../model/utils'

export type ProgressionsState = Record<string, ChordProgression>

export type CrateProgressionPayload = { progression: ChordProgression }
export type DeleteProgressionPayload = { progressionId: string }
export type UpdateProgressionPayload = { progression: ChordProgression }
export type AddBarsPayload = { progressionId: string; barIds: string[] }
export type RemoveBarsPayload = { progressionId: string; barIds: string[] }

const initialState: ProgressionsState = {
  default: {
    id: 'default',
    bars: [
      'default-first-bar',
      'default-second-bar',
      'default-third-bar',
      'default-fourth-bar',
    ],
  },
}

const progressionsSlice = createSlice({
  name: 'progressions',
  initialState,
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
    ) => ({
      ...state,
      [payload.progression.id]: payload.progression,
    }),
    deleteProgression: (
      state,
      { payload }: PayloadAction<DeleteProgressionPayload>,
    ) => removeByKey(payload.progressionId, state),

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
    getProgression: (state, id: string): ChordProgression | undefined => {
      return state[id]
    },
    getDefaultProgression: (state): ChordProgression => {
      return state['default']!
    },
  },
})

export const {
  addBars,
  removeBars,
  createProgression,
  updateProgression,
  deleteProgression,
} = progressionsSlice.actions
export const { reducer: progressionsReducer } = progressionsSlice
export const { getProgression, getDefaultProgression, getProgressions } =
  progressionsSlice.selectors
