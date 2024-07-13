import { TransitionCategory } from '../../src/model/types'
import { chordTonesWithChromaticLeadingTone } from './chordTonesWithChromaticLeadingTone'
import { rootAndChordTone } from './rootAndChordTone'
import { rootToChromaticPassingTone } from './rootToChromaticPassingTone'

export const TRANSITION_CATEGORIES: TransitionCategory[] = [
  chordTonesWithChromaticLeadingTone,
  rootAndChordTone,
  rootToChromaticPassingTone,
]
