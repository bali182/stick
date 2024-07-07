import { Transition, TransitionCategory } from './types'

export function filterCategoriesByTransitions(
  categories: TransitionCategory[],
  predicate: (transition: Transition) => boolean,
): TransitionCategory[] {
  const result: TransitionCategory[] = []
  for (let i = 0; i < categories.length; i += 1) {
    const category = categories[i]!
    const transitions = category.transitions.filter(predicate)
    if (transitions.length > 0) {
      result.push({ ...category, transitions })
    }
  }
  return result
}
