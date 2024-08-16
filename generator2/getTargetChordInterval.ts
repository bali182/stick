import { TransitionContext } from '../generated/wbp/wbpParser'
import { isNil } from '../src/model/isNil'

export function getTargetChordInterval(
  ast: TransitionContext,
): number | undefined {
  const target = ast.targetChord()
  if (isNil(target)) {
    return undefined
  }
  if (target.getChild(1)?.getText() === '?') {
    return undefined
  }
  const interval = target.signedInt()
  if (isNil(interval)) {
    return undefined
  }
  const num = parseInt(interval.INTEGER().getText())
  const sign = interval.sign()?.getText?.()
  return sign === '-' ? -num : num
}
