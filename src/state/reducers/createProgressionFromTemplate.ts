import { CreateProgressionFromTemplateAction } from '../actionTypes'
import { AppState } from '../types'

export function createProgressionFromTemplateReducer(
  state: AppState,
  action: CreateProgressionFromTemplateAction,
): AppState {
  const template = action.payload.template

  return {
    ...state,
    bars: {
      ...state.bars,
      ...template.bars,
    },
    chords: {
      ...state.chords,
      ...template.chords,
    },
    progressions: {
      ...state.progressions,
      [template.progression.id]: template.progression,
    },
  }
}
