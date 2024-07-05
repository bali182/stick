import { factory, ImportDeclaration } from 'typescript'

export function getModelTypeImport(...names: string[]): ImportDeclaration {
  return factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports(
        names.map((name) =>
          factory.createImportSpecifier(
            false,
            undefined,
            factory.createIdentifier(name),
          ),
        ),
      ),
    ),
    factory.createStringLiteral('../../src/model/types'),
    undefined,
  )
}
