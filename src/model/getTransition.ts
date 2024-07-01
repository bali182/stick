import { STRATEGY_MAP } from '../strategies/strategies'
import { Transition } from './types'

export function getTransition(id: string): Transition {
  return STRATEGY_MAP[id]!
}
