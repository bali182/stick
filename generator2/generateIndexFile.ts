import { TransitionCategory2 } from '../src/model/types'
import { printFile } from './printFile'
import { OUTPUT_INDEX } from './constants'
import { writeSourceFile } from './writeSourceFile'
import { getTransitionCategoryImport } from './getTransitionCategoryImport'
import { getIndexTypescriptAst } from './getIndexContentAst'
import { getModelTypeImport } from './getModelTypeImport'

export function generateIndexFile(
  cats: [string, TransitionCategory2[]][],
): void {
  const content = getIndexTypescriptAst(cats)
  const imports = [
    getModelTypeImport('TransitionCategory2'),
    ...cats.map(getTransitionCategoryImport),
  ]
  const source = printFile(imports, [content])
  writeSourceFile(OUTPUT_INDEX, source)
}
