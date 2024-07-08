import { ATBar, ATNote, ATTrack } from '../../alphaTex/model'
import { toAlphaTex } from '../../alphaTex/toAlphaTex'
import { configSlice } from '../config'
import { AppState } from '../types'
import { getAlphaTexBass } from './getAlphaTexBass'
import { getAlphaTexChords } from './getAlphaTexChords'
import { prepareAlphaTexBass } from './prepareAlphaTexBass'
import { prepareAlphaTexChords } from './prepareAlphaTexChords'

export function getAlphaTex(state: AppState, progressionId: string): string {
  const bassTrack = getAlphaTexBass(
    prepareAlphaTexBass(state, progressionId),
    configSlice.selectors.getTuning(state),
  )
  const accompanimentTrack = getAlphaTexChords(
    prepareAlphaTexChords(state, progressionId),
  )
  return `${toAlphaTex(bassTrack)}\n${toAlphaTex(accompanimentTrack)}`
}
