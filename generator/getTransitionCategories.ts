import { RawTransitionCategory, TransitionCategory } from '../src/model/types'
import { getTransitionCategory } from './getTransitionCategory'

export function getTransitionCategories(
  raw: Record<string, RawTransitionCategory>,
): TransitionCategory[] {
  return Object.entries(raw).map(([id, cat]) => getTransitionCategory(id, cat))
}
