import { factory, NodeFlags, Statement, SyntaxKind } from 'typescript'
import { Transition } from '../src/model/types'
import { getLiteralAst } from './getLiteralAst'
import { getTransitionVariableName } from './getTransitionVariableName'

export function getTransitionTypescriptAst(model: Transition): Statement {
  return factory.createVariableStatement(
    [factory.createModifier(SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          factory.createIdentifier(getTransitionVariableName(model)),
          undefined,
          factory.createTypeReferenceNode('Transition'),
          getLiteralAst(model, true),
        ),
      ],
      NodeFlags.Const,
    ),
  )
}
