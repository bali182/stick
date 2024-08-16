import { RawTransitionCategory2 } from '../src/model/types'
import { readdirSync, statSync } from 'fs'
import { basename, extname, join } from 'path'

export function getRawTransitionCategories(
  folder: string,
): Record<string, Record<string, RawTransitionCategory2>> {
  const files = readdirSync(folder)
  const categories: Record<string, any> = {}

  for (const file of files) {
    const filePath = join(folder, file)
    const fileStats = statSync(filePath)

    if (fileStats.isFile() && extname(file) === '.ts') {
      const { default: _, ...rest } = require(filePath)
      categories[basename(file, '.ts')] = rest
    }
  }

  return categories
}
