import { factory, ImportDeclaration } from 'typescript'
import { TransitionCategory2 } from '../src/model/types'

export function getTransitionCategoryImport([sourceFileName, categories]: [
  string,
  TransitionCategory2[],
]): ImportDeclaration {
  return factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports(
        categories.map(({ variableName }) =>
          factory.createImportSpecifier(
            false,
            undefined,
            factory.createIdentifier(variableName),
          ),
        ),
      ),
    ),
    factory.createStringLiteral(`./${sourceFileName}`),
    undefined,
  )
}
