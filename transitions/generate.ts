import { join, resolve } from 'path'
import { chordTonesWithChromaticPassingNotes } from './chordTonesWithChromaticLeadingTone'
import { getTransitionAst } from './utils/getTransitionAst'
import { getTransitionModel } from './utils/getTransitionModel'
import { getTransitionTypescriptAst } from './utils/getTransitionTypescriptAst'
import { printFile } from './utils/printFile'
import { writeSync } from './utils/writeSync'
import { factory } from 'typescript'

const outputPath = resolve(join('generated', 'transitions', 'index.ts'))

const models = chordTonesWithChromaticPassingNotes.transitions
  .map((transition) => getTransitionAst(transition))
  .map((ast) => getTransitionModel(ast))
  .map((model) => getTransitionTypescriptAst(model))

const importDecl = factory.createImportDeclaration(
  undefined,
  factory.createImportClause(
    false,
    undefined,
    factory.createNamedImports([
      factory.createImportSpecifier(
        false,
        undefined,
        factory.createIdentifier('Transition'),
      ),
    ]),
  ),
  factory.createStringLiteral('../../src/model/types'),
  undefined,
)

const source = printFile([importDecl], models)
writeSync(outputPath, source)
