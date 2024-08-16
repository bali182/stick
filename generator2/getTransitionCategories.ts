import { RawTransitionCategory2, TransitionCategory2 } from '../src/model/types'
import { getTransitionCategory } from './getTransitionCategory'

export function getTransitionCategories(
  rawData: Record<string, Record<string, RawTransitionCategory2>>,
): TransitionCategory2[] {
  return Object.entries(rawData).flatMap(([sourceFileName, rawCategories]) =>
    Object.entries(rawCategories).map(([id, rawCategory]) =>
      getTransitionCategory(sourceFileName, id, rawCategory),
    ),
  )
}
