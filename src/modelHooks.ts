import { useParams } from 'react-router'
import {
  ChordProgression,
  Bar,
  ChordSymbol,
  ProgressionsStatus,
  PitchedNote,
  TransitionCategory,
  Note,
  Transition,
} from './model/types'
import { progressionsSlice } from './state/progressions'
import { useSelector } from 'react-redux'
import { AppState, ConfigState } from './state/types'
import { barsSlice } from './state/bars'
import { getNextChord } from './state/selectors/getNextChord'
import { chordsSlice } from './state/chords'
import { getProgressionStatus } from './state/selectors/getProgressionStatus'
import { getAlphaTex } from './state/selectors/getAlphaTex'
import { useMemo } from 'react'
import { isNil } from './model/isNil'
import { getNoteRange } from './model/getNoteRange'
import { filterCategoriesByTransitions } from './model/filterCategoriesByTransitions'
import { TRANSITION_CATEGORIES } from '../generated/transitions'
import { canTransition } from './model/canTransition'
import { getPossiblePitches } from './model/utils'
import { TRANSITION_MAP, TRANSITIONS } from './model/constants'

export function useProgression(
  progressionId: string | undefined,
): ChordProgression | undefined {
  return useSelector<AppState, ChordProgression | undefined>((state) =>
    progressionsSlice.selectors.getProgression(state, progressionId),
  )
}

export function useActiveProgression(): ChordProgression | undefined {
  const { progressionId } = useParams()
  return useProgression(progressionId!)
}

export function useBar(barId: string | undefined): Bar | undefined {
  return useSelector<AppState, Bar | undefined>((state) =>
    barsSlice.selectors.getBar(state, barId),
  )
}

export function useChord(chordId: string | undefined): ChordSymbol | undefined {
  return useSelector<AppState, ChordSymbol | undefined>((state) =>
    chordsSlice.selectors.getChord(state, chordId),
  )
}

export function useNextChord(
  progressionId: string | undefined,
  barId: string | undefined,
  chordId: string | undefined,
): ChordSymbol | undefined {
  return useSelector<AppState, ChordSymbol | undefined>((state) =>
    getNextChord(state, progressionId, barId, chordId),
  )
}

export function useChordAt(
  barId: string | undefined,
  index: number,
): ChordSymbol | undefined {
  return useSelector<AppState, ChordSymbol | undefined>((state) => {
    const bar = barsSlice.selectors.getBar(state, barId)
    if (bar?.chords?.length ?? -1 <= index) {
      return undefined
    }
    const chordId = bar?.chords[index]!
    return chordsSlice.selectors.getChord(state, chordId)
  })
}

export function useConfig(): ConfigState {
  return useSelector<AppState, ConfigState>((state) => state.config)
}

export function useProgressionStatus(
  progressionId: string | undefined,
): ProgressionsStatus {
  return useSelector<AppState, ProgressionsStatus>((state) =>
    getProgressionStatus(state, progressionId),
  )
}

export function useAlphaTex(progressionId: string): string {
  return useSelector<AppState, string>((state) =>
    getAlphaTex(state, progressionId),
  )
}

export function useNoteRange(tuning: PitchedNote[] | undefined): PitchedNote[] {
  return useMemo(() => (isNil(tuning) ? [] : getNoteRange(tuning)), [tuning])
}

export function useTransitionCategories(
  tuning: PitchedNote[] | undefined,
  noteCount: number | undefined,
  from: ChordSymbol | undefined,
  to: ChordSymbol | undefined,
): TransitionCategory[] {
  return useMemo<TransitionCategory[]>(() => {
    return filterCategoriesByTransitions(TRANSITION_CATEGORIES, (transition) =>
      canTransition(from, to, tuning, transition, noteCount),
    )
  }, [from, to, tuning])
}

export function usePossibleRoots(
  tuning: PitchedNote[] | undefined,
  note: Note | undefined,
) {
  return useMemo<PitchedNote[]>(
    () => getPossiblePitches(note, getNoteRange(tuning)),
    [tuning, note],
  )
}

export function useTransition(
  transitionId: string | undefined,
): Transition | undefined {
  return isNil(transitionId) ? undefined : TRANSITION_MAP[transitionId]
}
