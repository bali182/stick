import { join, resolve } from 'path'
import { chordTonesWithChromaticPassingNotes } from '../transitions/chordTonesWithChromaticLeadingTone'
import { getTransitionAst } from './getTransitionAst'
import { getTransitionModel } from './getTransitionModel'
import { getTransitionTypescriptAst } from './getTransitionTypescriptAst'
import { printFile } from './printFile'
import { writeSync } from './writeSync'
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
