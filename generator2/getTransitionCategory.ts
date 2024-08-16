import { RawTransitionCategory2, TransitionCategory2 } from '../src/model/types'
import { getTransitionAst } from './getTransitionAst'
import { getTransitionCategoryName } from './getTransitionCategoryName'
import { getTransitionModel } from './getTransitionModel'

export function getTransitionCategory(
  sourceFileName: string,
  variableName: string,
  category: RawTransitionCategory2,
): TransitionCategory2 {
  const { transitions: rawTransitions, tags = [], source, target } = category
  const transitions = rawTransitions
    .map((transition) => getTransitionAst(transition))
    .map((ast) => getTransitionModel(ast, tags, source, target))
  const id = `${sourceFileName}-${variableName}`
  return {
    id,
    name: getTransitionCategoryName(tags ?? [], source, target),
    variableName,
    sourceFileName,
    transitions,
    tags,
  }
}
