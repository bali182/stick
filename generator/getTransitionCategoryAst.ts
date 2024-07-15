import { factory, NodeFlags, Statement, SyntaxKind } from 'typescript'
import { TransitionCategory } from '../src/model/types'
import { getTransitionVariableName } from './getTransitionVariableName'
import { getLiteralAst } from './getLiteralAst'

export function getTransitionCategoryAst(cat: TransitionCategory): Statement {
  const { transitions: _transitions, ...rest } = cat

  const transitions = _transitions.map((transition) =>
    factory.createIdentifier(getTransitionVariableName(transition)),
  )
  const ast = getLiteralAst({ ...rest, transitions }, true)

  return factory.createVariableStatement(
    [factory.createToken(SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          factory.createIdentifier(cat.id),
          undefined,
          factory.createTypeReferenceNode(
            factory.createIdentifier('TransitionCategory'),
            undefined,
          ),
          ast,
        ),
      ],
      NodeFlags.Const,
    ),
  )
}
