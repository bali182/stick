import { useParams } from 'react-router'
import {
  ChordProgression,
  Bar,
  ChordSymbol,
  ProgressionsStatus,
  PitchedNote,
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

export function useProgression(
  progressionId: string,
): ChordProgression | undefined {
  return useSelector<AppState, ChordProgression | undefined>((state) =>
    progressionsSlice.selectors.getProgression(state, progressionId),
  )
}

export function useActiveProgression(): ChordProgression | undefined {
  const { progressionId } = useParams()
  return useProgression(progressionId!)
}

export function useBar(barId: string): Bar | undefined {
  return useSelector<AppState, Bar | undefined>((state) =>
    barsSlice.selectors.getBar(state, barId),
  )
}

export function useChord(chordId: string): ChordSymbol | undefined {
  return useSelector<AppState, ChordSymbol | undefined>((state) =>
    chordsSlice.selectors.getChord(state, chordId),
  )
}

export function useNextChord(
  progressionId: string,
  barId: string,
  chordId: string,
): ChordSymbol | undefined {
  return useSelector<AppState, ChordSymbol | undefined>((state) =>
    getNextChord(state, progressionId, barId, chordId),
  )
}

export function useConfig(): ConfigState {
  return useSelector<AppState, ConfigState>((state) => state.config)
}

export function useProgressionStatus(
  progressionId: string,
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
