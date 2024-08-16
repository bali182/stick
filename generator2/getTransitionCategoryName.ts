import { getChordTypeSuffix } from '../src/model/getChordTypeSuffix'
import { isNil } from '../src/model/isNil'
import { ChordType, Tag } from '../src/model/types'
import { camelCase } from './camelCase'

function customJoin(
  items: string[],
  separator: string,
  lastSeparator: string,
): string {
  switch (items.length) {
    case 0:
      return ''
    case 1:
      return items[0]!
    default: {
      const initial = items.slice(0, -1)
      const last = items[items.length - 1]!
      return `${initial.join(separator)}${lastSeparator}${last}`
    }
  }
}

function getSourceName(source?: ChordType[]): string {
  if (isNil(source) || source.length === 0) {
    return 'From Any'
  }
  const chordTypes = source
    .map((s) => getChordTypeSuffix(s, false))
    .map((name) => camelCase(name, { pascalCase: true }))
  return `from${customJoin(chordTypes, ', ', ' or ')}`
}

function getSourceChordTypes(source?: ChordType[]): string[] {
  if (isNil(source) || source.length === 0) {
    return ['any chord']
  }
  return source.map((s) => getChordTypeSuffix(s, false))
}

function getTargetName(target?: number): string {
  if (isNil(target)) {
    return 'any chord'
  }
  const dir = target < 0 ? 'down' : 'up'
  return `${dir} ${Math.abs(target)} semitones`
}

export function getTransitionCategoryName(
  _tags: Tag[],
  source: ChordType[] | undefined,
  target: number | undefined,
): string {
  const sourceNames = customJoin(getSourceChordTypes(source), ', ', ' or ')
  const targetName = getTargetName(target)
  if (target === 0) {
    return `Stationary on ${sourceNames}`
  }
  return `From ${sourceNames} ${targetName}`
}
