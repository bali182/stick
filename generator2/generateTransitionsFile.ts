import { TransitionCategory2 } from '../src/model/types'
import { getTransitionTypescriptAst } from './getTransitionTypescriptAst'
import { printFile } from './printFile'
import { OUTPUT_FOLDER } from './constants'
import { join } from 'path'
import { writeSourceFile } from './writeSourceFile'
import { getModelTypeImport } from './getModelTypeImport'
import { getTransitionCategoryAst } from './getTransitionCategoryAst'

export function generateTransitionsFile(
  fileName: string,
  categories: TransitionCategory2[],
): void {
  const asts = [
    ...categories.flatMap((category) =>
      category.transitions.map(getTransitionTypescriptAst),
    ),
    ...categories.map(getTransitionCategoryAst),
  ]
  const imports = [getModelTypeImport('Transition', 'TransitionCategory2')]
  const source = printFile(imports, asts)
  writeSourceFile(join(OUTPUT_FOLDER, `${fileName}.ts`), source)
}
