import { isNil } from './isNil'
import { Note, PitchedNote } from './types'

export function getPitchedNoteParts(note: PitchedNote): [Note, number] {
  if (isNil(note)) {
    throw new TypeError('note must be a valid note')
  }
  const noteName = note.replace(/[0-9]+/g, '') as Note
  const pitch = parseInt(note.replace(/[^0-9]+/g, ''))
  return [noteName, pitch]
}
