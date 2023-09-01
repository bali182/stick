import { idx, t } from './note'
import { Chord, ChordTone, Note, Pitch, PitchedNote } from './types'

function getChordTone(chord: Chord, tone: ChordTone): Note {
  switch (tone) {
    case 'ROOT':
      const note = chord.root
      return { name: note.name, accidental: note.accidental }
    case 'THIRD':
      return chord.third
    case 'FIFTH':
      return chord.fifth
  }
}

function getNoteWithNoneDirection(note: Note, current: Chord, next: Chord): PitchedNote {
  if (note.name === current.root.name && note.accidental === current.root.accidental) {
    return current.root
  }
  if (note.name === next.root.name && note.accidental === next.root.accidental) {
    return next.root
  }
  throw new TypeError('pitch.direction cannot be "NONE" unless referring to root')
}

export function getPitchedNote(current: Chord, next: Chord, pitch: Pitch): PitchedNote {
  const chord = pitch.reference === 'CURRENT' ? current : next
  const root = chord.root
  const chordTone = getChordTone(chord, pitch.chordTone)
  const targetNote = t(chordTone, pitch.interval, chordTone.accidental)
  const rootIndex = idx(root)
  const noteIndex = idx(targetNote)
  switch (pitch.direction) {
    case 'NONE':
      return getNoteWithNoneDirection(targetNote, current, next)
    case 'UP':
      return { ...targetNote, pitch: noteIndex < rootIndex ? root.pitch + 1 : root.pitch }
    case 'DOWN':
      return { ...targetNote, pitch: noteIndex > rootIndex ? root.pitch - 1 : root.pitch }
    default:
      throw new TypeError(`pitch.direction cannot be "${pitch.direction}" unless referring to root`)
  }
}
