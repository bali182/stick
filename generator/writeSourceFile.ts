import { lstatSync, mkdirSync, writeFileSync } from 'fs'
import { dirname } from 'path'

function exists(dir: string): boolean {
  try {
    const stats = lstatSync(dir)
    return stats.isDirectory()
  } catch (e) {
    return false
  }
}

export function writeSourceFile(path: string, content: string): void {
  const directory = dirname(path)
  if (!exists(directory)) {
    mkdirSync(directory, { recursive: true })
  }
  return writeFileSync(path, content, 'utf-8')
}
