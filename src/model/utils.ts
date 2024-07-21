import {
  CHORMATIC_SCALE_LENGTH,
  INDEX_BY_NOTE,
  NOTE_BY_INDEX,
} from './constants'
import { getPitchedNoteParts } from './getPitchedNoteParts'
import { Accidental, BaseNoteName, NoteIndex, Note, PitchedNote } from './types'

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

export function getPossiblePitches(
  note: Note,
  range: PitchedNote[],
): PitchedNote[] {
  return range.filter((pitchedNote) => {
    const [possibleNote] = getPitchedNoteParts(pitchedNote)
    return possibleNote === note
  })
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

export function transpose(n: Note, a: number, ac: Accidental = '#'): Note {
  const [_, noteAcc] = getNoteParts(n)
  const accidental = noteAcc ?? ac
  const transposedNoteIndex = getNoteIndex(n) + a
  const newNoteIndex = (transposedNoteIndex %
    CHORMATIC_SCALE_LENGTH) as NoteIndex
  const notesByIndex = getNotesAtIndex(newNoteIndex)
  switch (notesByIndex.length) {
    case 1:
      return notesByIndex[0]!
    case 2:
      return accidental === '#' ? notesByIndex[0]! : notesByIndex[1]!
    default:
      throw new TypeError(
        `Unexpected notes at "${newNoteIndex}": ${notesByIndex}`,
      )
  }
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
