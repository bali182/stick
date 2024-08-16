import {
  CHORMATIC_SCALE_LENGTH,
  INDEX_BY_NOTE,
  NOTE_BY_INDEX,
} from './constants'
import { getPitchedNoteParts } from './getPitchedNoteParts'
import { isNil } from './isNil'
import {
  Accidental,
  BaseNoteName,
  NoteIndex,
  Note,
  PitchedNote,
  HasId,
} from './types'

export function removeByKey<T>(
  key: string,
  { [key]: _, ...rest }: Record<string, T>,
): Record<string, T> {
  return rest
}

export function removeByKeys<T>(
  keys: string[],
  data: Record<string, T>,
): Record<string, T> {
  return Object.entries(data ?? {})
    .filter(([key]) => !keys.includes(key))
    .reduce((output, [key, value]) => ({ ...output, [key]: value }), {})
}

export function mapRecord<I, O>(
  data: Record<string, I>,
  transform: (
    input: I,
    index: number,
    key: string,
    data: Record<string, I>,
  ) => O,
): Record<string, O> {
  return Object.entries(data ?? {})
    .map(([key, value], index): [string, O] => [
      key,
      transform(value, index, key, data),
    ])
    .reduce((output, [key, value]) => ({ ...output, [key]: value }), {})
}

export function updateRecord<T extends HasId>(
  data: Record<string, T>,
  items: T[],
): Record<string, T> {
  if (items.length === 0) {
    return data
  }
  const clone: Record<string, T> = { ...data }
  for (let item of items) {
    clone[item.id] = item
  }
  return clone
}

export function updatePartial<T>(
  data: Record<string, T>,
  id: string,
  updates: Partial<T>,
): Record<string, T> {
  const item = data[id]
  if (isNil(item)) {
    return data
  }
  return {
    ...data,
    [id]: { ...item, ...updates },
  }
}

export function groupBy<T, S extends string>(
  data: T[],
  fn: (item: T) => S,
): Record<S, T[]> {
  return data.reduce((obj, item) => {
    const key = fn(item)
    if (!obj.hasOwnProperty(key)) {
      obj[key] = []
    }
    obj[key].push(item)
    return obj
  }, {} as Record<S, T[]>)
}

export function insertAt<T>(array: T[], item: T, index: number): T[] {
  return [...array.slice(0, index), item, ...array.slice(index)]
}

export function getPossiblePitches(
  note: Note | undefined,
  range: PitchedNote[] | undefined,
): PitchedNote[] {
  if (isNil(note) || isNil(range)) {
    return []
  }
  return range
    .filter((pitchedNote) => {
      const [possibleNote] = getPitchedNoteParts(pitchedNote)
      return possibleNote === note
    })
    .sort()
}

export function getNoteIndex(note: Note): NoteIndex {
  return INDEX_BY_NOTE[note]!
}

export function getPitchedNoteIndex(note: PitchedNote): NoteIndex {
  const [noteBase] = getPitchedNoteParts(note)
  return getNoteIndex(noteBase)
}

export function getNotesAtIndex(index: NoteIndex): Note[] {
  return NOTE_BY_INDEX[index]
}

export function getNoteParts(note: Note): [BaseNoteName, Accidental?] {
  const base = note.slice(0, 1) as BaseNoteName
  const accidental = note.slice(1, 2) as Accidental
  return [base, accidental && accidental.length > 0 ? accidental : undefined]
}

export function lerp(start: number, end: number, ratio: number): number {
  return Math.floor((1 - ratio) * start + ratio * end)
}

export function moveUp<T>(arr: T[], index: number): T[] {
  // If the index is 0 or invalid, return a copy of the original array
  if (index <= 0 || index >= arr.length) {
    return [...arr]
  }

  // Create a copy of the original array
  const newArr = [...arr]

  // Swap the elements using a temporary variable
  const temp = newArr[index]!
  newArr[index] = newArr[index - 1]!
  newArr[index - 1] = temp

  return newArr
}

export function removeByIndex<T>(arr: T[], index: number): T[] {
  return arr.slice(0, index).concat(arr.slice(index + 1))
}

export function arrayMove<T>(array: T[], from: number, to: number): T[] {
  const newArray = Array.from(array)
  newArray.splice(
    to < 0 ? newArray.length + to : to,
    0,
    newArray.splice(from, 1)[0]!,
  )
  return newArray
}

export function moveDown<T>(arr: T[], index: number): T[] {
  // If the index is invalid or the last element, return a copy of the original array
  if (index < 0 || index >= arr.length - 1) {
    return [...arr]
  }

  // Create a copy of the original array
  const newArr = [...arr]

  // Swap the elements using a temporary variable
  const temp = newArr[index]!
  newArr[index] = newArr[index + 1]!
  newArr[index + 1] = temp

  return newArr
}

export function getUniqueName(
  name: string,
  names: Set<string>,
  glue: string = '-',
): string {
  let uniqueName = name
  let num = 1
  while (names.has(uniqueName)) {
    uniqueName = `${name}${glue}${num++}`
  }
  return uniqueName
}

export function getRandomWeightedElement<T>(elements: [T, number][]): T {
  // Calculate the total weight
  const totalWeight = elements.reduce((sum, element) => sum + element[1], 0)

  // Generate a random number between 0 and totalWeight
  const random = Math.random() * totalWeight

  // Iterate through the array to find the random element
  let cumulativeWeight = 0
  for (const [element, weight] of elements) {
    cumulativeWeight += weight
    if (random < cumulativeWeight) {
      return element
    }
  }

  // Fallback return statement, this should never be reached
  // because the random number is always less than totalWeight
  throw new Error('Should never reach here if input is valid')
}

export function noop() {}
