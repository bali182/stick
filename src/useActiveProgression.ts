import { useParams } from 'react-router'
import { ChordProgression } from './model/types'
import { useSelector } from 'react-redux'
import { AppState } from './state/types'
import { progressionsSlice } from './state/progressions'

export function useActiveProgression(): ChordProgression | undefined {
  const { progressionId } = useParams()
  return useSelector<AppState, ChordProgression | undefined>((state) =>
    progressionsSlice.selectors.getProgression(state, progressionId),
  )
}
