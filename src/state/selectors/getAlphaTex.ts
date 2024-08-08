import { toAlphaTex } from '../../alphaTex/toAlphaTex'
import { isNil } from '../../model/isNil'
import { progressionsSlice } from '../progressions'
import { AppState } from '../types'
import { getAlphaTexBass } from './getAlphaTexBass'
import { getAlphaTexChords } from './getAlphaTexChords'
import { prepareAlphaTexBass } from './prepareAlphaTexBass'
import { prepareAlphaTexChords } from './prepareAlphaTexChords'

export function getAlphaTex(state: AppState, progressionId: string): string {
  const progression = progressionsSlice.selectors.getProgression(
    state,
    progressionId!,
  )!
  const bassTrack = getAlphaTexBass(
    prepareAlphaTexBass(state, progressionId),
    progression.tuning,
  )
  const accompanimentTrack = getAlphaTexChords(
    prepareAlphaTexChords(state, progressionId),
  )
  return [
    `\\title "${progression.name}" \\tempo ${progression.bpm ?? 120}`,
    '.',
    toAlphaTex(bassTrack),
    toAlphaTex(accompanimentTrack),
  ].join('\n')
}
