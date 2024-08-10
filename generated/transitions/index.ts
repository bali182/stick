import { TransitionCategory } from '../../src/model/types'
import { chordTonesWithChromaticLeadingTone } from './chordTonesWithChromaticLeadingTone'
import { oneNote } from './oneNote'
import { oneToFive } from './oneToFive'
import { oneToFour } from './oneToFour'
import { oneToSix } from './oneToSix'
import { oneToThree } from './oneToThree'
import { oneToTwo } from './oneToTwo'
import { rootAndChordTone } from './rootAndChordTone'
import { rootToChromaticPassingTone } from './rootToChromaticPassingTone'
import { stationary } from './stationary'
import { twoToOne } from './twoToOne'

export const TRANSITION_CATEGORIES: TransitionCategory[] = [
  chordTonesWithChromaticLeadingTone,
  oneNote,
  oneToFive,
  oneToFour,
  oneToSix,
  oneToThree,
  oneToTwo,
  rootAndChordTone,
  rootToChromaticPassingTone,
  stationary,
  twoToOne,
]
