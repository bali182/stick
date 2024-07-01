import { Transition } from '../model/types'
import {
  toAnyAscDescHigherChrom,
  toAnyAscDescLowerChrom,
  toAnyAscHigherChrom,
  toAnyAscLowerChrom,
  toAnyDescAscHigherChrom,
  toAnyDescAscLowerChrom,
  toAnyHigherChrom,
  toAnyLowerChrom,
} from './chordTonesWithChromaticLeadingTone'

export const STRATEGIES: Transition[] = [
  // To any chord with chord tones and a chromatic
  toAnyAscLowerChrom,
  toAnyAscHigherChrom,
  toAnyDescAscLowerChrom,
  toAnyDescAscHigherChrom,
  toAnyAscDescLowerChrom,
  toAnyAscDescHigherChrom,
  // To any chord with root and chromatic
  toAnyHigherChrom,
  toAnyLowerChrom,
]

export const STRATEGY_MAP: Record<string, Transition> = STRATEGIES.reduce(
  (
    map: Record<string, Transition>,
    strategy: Transition,
  ): Record<string, Transition> => ({
    ...map,
    [strategy.id]: strategy,
  }),
  {},
)
