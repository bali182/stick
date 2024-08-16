import { join, resolve } from 'path'

export const INPUT_FOLDER = resolve('transitions2')
export const OUTPUT_FOLDER = resolve(join('generated2', 'transitions'))
export const OUTPUT_INDEX = join(OUTPUT_FOLDER, 'index.ts')
