import { TRANSITION_MAP } from './constants'
import { Transition } from './types'

export function getTransition(id: string): Transition {
  return TRANSITION_MAP[id]!
}
