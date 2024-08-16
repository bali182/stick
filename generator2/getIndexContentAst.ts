import { factory, NodeFlags, Statement, SyntaxKind } from 'typescript'
import { TransitionCategory2 } from '../src/model/types'

export function getIndexTypescriptAst(
  categories: [string, TransitionCategory2[]][],
): Statement {
  const items = categories
    .flatMap(([_, cats]) => cats)
    .map(({ variableName }) => factory.createIdentifier(variableName))
  return factory.createVariableStatement(
    [factory.createToken(SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          factory.createIdentifier('TRANSITION_CATEGORIES'),
          undefined,
          factory.createArrayTypeNode(
            factory.createTypeReferenceNode(
              factory.createIdentifier('TransitionCategory2'),
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
