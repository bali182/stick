import {
  createPrinter,
  factory,
  NewLineKind,
  NodeFlags,
  Statement,
  SyntaxKind,
  ImportDeclaration,
} from 'typescript'
import typescriptParser from 'prettier/parser-typescript'
import prettier from 'prettier/standalone'
import config from '../.prettierrc.json'

export function printFile(imp: ImportDeclaration[], stmt: Statement[]): string {
  const contents: Statement[][] = [imp, stmt]

  const sourceFiles = contents
    .filter((statements) => statements.length > 0)
    .map((statements) =>
      factory.createSourceFile(
        statements,
        factory.createToken(SyntaxKind.EndOfFileToken),
        NodeFlags.None,
      ),
    )

  const printer = createPrinter({
    newLine: NewLineKind.LineFeed,
    removeComments: false,
  })

  const { overrides, ...cfg } = config

  return prettier.format(
    sourceFiles.map((file) => printer.printFile(file)).join('\n\n'),
    {
      ...(cfg as any),
      parser: 'typescript',
      plugins: [typescriptParser],
    },
  )
}
