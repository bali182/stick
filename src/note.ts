import { Accidental, Note, NoteName } from './types'

type InternalNote = WholeInternalNote | HalfInternalNote

type WholeInternalNote = { type: 'whole'; name: NoteName }
type HalfInternalNote = { type: 'half'; sharpName: NoteName; flatName: NoteName }

const CHROMATIC_SCALE: InternalNote[] = [
  { type: 'whole', name: 'C' },
  { type: 'half', flatName: 'C', sharpName: 'D' },
  { type: 'whole', name: 'D' },
  { type: 'half', flatName: 'D', sharpName: 'E' },
  { type: 'whole', name: 'E' },
  { type: 'whole', name: 'F' },
  { type: 'half', flatName: 'F', sharpName: 'G' },
  { type: 'whole', name: 'G' },
  { type: 'half', flatName: 'G', sharpName: 'A' },
  { type: 'whole', name: 'A' },
  { type: 'half', flatName: 'A', sharpName: 'B' },
  { type: 'whole', name: 'B' },
]

export function getNoteIndex(note: Note): number {
  const mainIdx = CHROMATIC_SCALE.findIndex((n) => n.type === 'whole' && n.name === note.name)
  if (note.accidental === undefined) {
    return mainIdx
  }
  switch (note.accidental) {
    case '#':
      return mainIdx + 1
    case 'b':
      return mainIdx - 1
    default:
      throw new TypeError(`Unexpected accidental: "${note.accidental}"`)
  }
}

export function t(note: Note, amount: number, acc: Accidental = '#'): Note {
  const accidental = note.accidental ?? acc
  const transposedNoteIndex = getNoteIndex(note) + amount
  const newNoteIndex = transposedNoteIndex % CHROMATIC_SCALE.length
  const newInternalNote = CHROMATIC_SCALE[newNoteIndex]!
  if (newInternalNote.type === 'whole') {
    return { name: newInternalNote.name }
  }
  return accidental === '#'
    ? { name: newInternalNote.sharpName, accidental: '#' }
    : { name: newInternalNote.flatName, accidental: 'b' }
}
