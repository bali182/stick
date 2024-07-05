import { join, resolve } from 'path'

export const INPUT_FOLDER = resolve('transitions')
export const OUTPUT_FOLDER = resolve(join('generated', 'transitions'))
export const OUTPUT_INDEX = join(OUTPUT_FOLDER, 'index.ts')
