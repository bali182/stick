import {
  CHORMATIC_SCALE_LENGTH,
  INDEX_BY_NOTE,
  NOTE_BY_INDEX,
  PITCHED_NOTE_MAP,
} from './constants'
import {
  Accidental,
  BaseNoteName,
  NoteIndex,
  NoteName,
  PitchedNoteName,
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

export function isNil<T>(
  input: T | null | undefined,
): input is null | undefined {
  return input === null || input === undefined
}

export function getPossiblePitches(note: NoteName): PitchedNoteName[] {
  return PITCHED_NOTE_MAP[note] ?? []
}

export function getNoteIndex(note: NoteName): NoteIndex {
  return INDEX_BY_NOTE[note]!
}

export function getPitchedNoteIndex(note: PitchedNoteName): NoteIndex {
  const [noteBase] = getPitchedNoteParts(note)
  return getNoteIndex(noteBase)
}

export function getNotesAtIndex(index: NoteIndex): NoteName[] {
  return NOTE_BY_INDEX[index]
}

export function getNoteParts(note: NoteName): [BaseNoteName, Accidental?] {
  const base = note.slice(0, 1) as BaseNoteName
  const accidental = note.slice(1, 2) as Accidental
  return [base, accidental && accidental.length > 0 ? accidental : undefined]
}

export function getPitchedNoteParts(note: PitchedNoteName): [NoteName, number] {
  const noteName = note.replace(/[0-9]+/g, '') as NoteName
  const pitch = parseInt(note.replace(/[^0-9]+/g, ''))
  return [noteName, pitch]
}

export function transpose(
  n: NoteName,
  a: number,
  ac: Accidental = '#',
): NoteName {
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
