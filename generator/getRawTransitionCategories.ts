import { RawTransitionCategory } from '../src/model/types'
import { readdirSync, statSync } from 'fs'
import { basename, extname, join } from 'path'

export function getRawTransitionCategories(
  folder: string,
): Record<string, RawTransitionCategory> {
  const files = readdirSync(folder)
  const imports: Record<string, any> = {}

  for (const file of files) {
    const filePath = join(folder, file)
    const fileStats = statSync(filePath)

    if (fileStats.isFile() && extname(file) === '.ts') {
      const module = require(filePath)
      imports[basename(file, '.ts')] = module.default
    }
  }

  return imports
}
