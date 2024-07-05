import { factory, ImportDeclaration } from 'typescript'
import { TransitionCategory } from '../src/model/types'

export function getTransitionCategoryImport(
  category: TransitionCategory,
): ImportDeclaration {
  return factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([
        factory.createImportSpecifier(
          false,
          undefined,
          factory.createIdentifier(category.id),
        ),
      ]),
    ),
    factory.createStringLiteral(`./${category.id}`),
    undefined,
  )
}
