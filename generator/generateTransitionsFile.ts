import { TransitionCategory } from '../src/model/types'
import { getTransitionTypescriptAst } from './getTransitionTypescriptAst'
import { printFile } from './printFile'
import { OUTPUT_FOLDER } from './constants'
import { join } from 'path'
import { writeSourceFile } from './writeSourceFile'
import { getModelTypeImport } from './getModelTypeImport'
import { getTransitionCategoryAst } from './getTransitionCategoryAst'

export function generateTransitionsFile(category: TransitionCategory): void {
  const asts = [
    ...category.transitions.map((model) => getTransitionTypescriptAst(model)),
    getTransitionCategoryAst(category),
  ]
  const imports = [getModelTypeImport('Transition', 'TransitionCategory')]
  const source = printFile(imports, asts)
  writeSourceFile(join(OUTPUT_FOLDER, `${category.id}.ts`), source)
}
