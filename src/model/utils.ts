import {
  CHORMATIC_SCALE_LENGTH,
  INDEX_BY_NOTE,
  NOTE_BY_INDEX,
  PITCHED_NOTE_MAP,
} from './constants'
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

export function isNil<T>(
  input: T | null | undefined,
): input is null | undefined {
  return input === null || input === undefined
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

export function getPitchedNoteParts(note: PitchedNote): [Note, number] {
  if (isNil(note)) {
    debugger
  }
  const noteName = note.replace(/[0-9]+/g, '') as Note
  const pitch = parseInt(note.replace(/[^0-9]+/g, ''))
  return [noteName, pitch]
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
