import { TransitionCategory } from '../../src/model/types'
import { chordTonesWithChromaticLeadingTone } from './chordTonesWithChromaticLeadingTone'
import { oneNote } from './oneNote'
import { oneToFive } from './oneToFive'
import { oneToFour } from './oneToFour'
import { rootAndChordTone } from './rootAndChordTone'
import { rootToChromaticPassingTone } from './rootToChromaticPassingTone'
import { stationary } from './stationary'
import { twoToOne } from './twoToOne'

export const TRANSITION_CATEGORIES: TransitionCategory[] = [
  chordTonesWithChromaticLeadingTone,
  oneNote,
  oneToFive,
  oneToFour,
  rootAndChordTone,
  rootToChromaticPassingTone,
  stationary,
  twoToOne,
]
