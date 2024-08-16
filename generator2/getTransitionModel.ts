import { TransitionContext } from '../generated/wbp2/wbp2Parser'
import { isNil } from '../src/model/isNil'
import { ChordType, Tag, Transition } from '../src/model/types'
import { getTransitionName } from './getTransitionName'
import { getTransitionStep } from './getTransitionStep'

function getId(
  code: string,
  source: ChordType[] | undefined,
  target: number | undefined,
): string {
  const sourceNames = isNil(source) || source.length === 0 ? ['?'] : source
  const targetName = isNil(target) ? '?' : target
  return `S:${sourceNames.join('|')};T:${targetName};${code}`
}

export function getTransitionModel(
  ast: TransitionContext,
  tags: Tag[],
  source: ChordType[] | undefined,
  target: number | undefined,
): Transition {
  const id = getId(ast.getText(), source, target)
  const steps = ast.step_list().map(getTransitionStep)
  const model: Transition = {
    id,
    name: '',
    steps,
    tags,
    source,
    target,
  }
  model.name = getTransitionName(model)
  return model
}
