import { TRANSITION_MAP } from '../../model/constants'
import { isNil, isNotNil } from '../../model/isNil'
import { ChordProgression, ChordSymbol } from '../../model/types'
import { updateRecord } from '../../model/utils'
import { SetNoteCountAction } from '../actionTypes'
import { AppState } from '../types'
import { removeOrphanedTransitions } from './utils'

export function setNoteCountReducer(
  state: AppState,
  action: SetNoteCountAction,
): AppState {
  const { progressionId, noteCount } = action.payload
  const progression = state.progressions[progressionId]

  if (isNil(progression)) {
    return state
  }

  const chords = progression.bars
    .map((barId) => state.bars[barId])
    .flatMap((bar) => bar?.chords ?? [])
    .map((chordId) => state.chords[chordId])
    .filter(isNotNil)
    .map((chord): ChordSymbol => {
      if (isNil(chord.transitionId) || !isNil(chord.noteCount)) {
        return chord
      }
      const transition = TRANSITION_MAP[chord.transitionId]
      if (isNil(transition) || transition.steps.length !== noteCount) {
        return { ...chord, transitionId: undefined }
      }
      return chord
    })

  const updatedProg: ChordProgression = {
    ...progression,
    noteCount,
  }

  return removeOrphanedTransitions(
    {
      ...state,
      progressions: updateRecord(state.progressions, [updatedProg]),
      chords: updateRecord(state.chords, chords),
    },
    progressionId,
  )
}
