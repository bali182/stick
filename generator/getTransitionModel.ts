import { TransitionContext } from '../generated/wbp/wbpParser'
import { Tag, Transition } from '../src/model/types'
import { getTransitionName } from './getTransitionName'
import { getTransitionStep } from './getTransitionStep'

export function getTransitionModel(
  ast: TransitionContext,
  tags: Tag[],
): Transition {
  const id = ast.getText()
  const steps = ast.steps().step_list().map(getTransitionStep)
  const model: Transition = {
    id,
    name: '',
    steps,
    tags,
  }
  model.name = getTransitionName(model)
  return model
}
