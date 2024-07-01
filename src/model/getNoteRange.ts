import { Note, transpose } from 'tonal'
import { PitchedNote } from './types'
import { INTERVALS } from './constants'

export function getNoteRange(tuning: PitchedNote[]): PitchedNote[] {
  const notes = new Set<PitchedNote>()
  tuning.forEach((note) => {
    INTERVALS.forEach((interval) => {
      const frettedNote = transpose(note, interval) as PitchedNote
      const enharmNote = Note.enharmonic(frettedNote) as PitchedNote
      notes.add(frettedNote).add(enharmNote)
    })
  })
  return Array.from(notes)
}
