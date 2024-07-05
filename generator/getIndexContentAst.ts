import { factory, NodeFlags, Statement, SyntaxKind } from 'typescript'
import { TransitionCategory } from '../src/model/types'

export function getIndexTypescriptAst(
  categories: TransitionCategory[],
): Statement {
  const items = categories.map(({ id }) => factory.createIdentifier(id))
  return factory.createVariableStatement(
    [factory.createToken(SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          factory.createIdentifier('TRANSITION_CATEGORIES'),
          undefined,
          factory.createArrayTypeNode(
            factory.createTypeReferenceNode(
              factory.createIdentifier('TransitionCategory'),
              undefined,
            ),
          ),
          factory.createArrayLiteralExpression(items, false),
        ),
      ],
      NodeFlags.Const,
    ),
  )
}
