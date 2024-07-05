import { RawTransitionCategory, TransitionCategory } from '../src/model/types'
import { getTransitionAst } from './getTransitionAst'
import { getTransitionModel } from './getTransitionModel'

export function getTransitionCategory(
  id: string,
  category: RawTransitionCategory,
): TransitionCategory {
  const { transitions: rawTransitions, description, name, tags } = category
  const transitions = rawTransitions
    .map((transition) => getTransitionAst(transition))
    .map((ast) => getTransitionModel(ast))
  return {
    id,
    description,
    name,
    tags,
    transitions,
  }
}
