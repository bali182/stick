import { transpose } from 'tonal'
import { PitchedNote } from './types'
import { INTERVALS } from './constants'

export function getNoteRange(tuning: PitchedNote[]): PitchedNote[] {
  const notes = new Set<PitchedNote>()
  tuning.forEach((note) => {
    INTERVALS.forEach((interval) => {
      notes.add(transpose(note, interval) as PitchedNote)
    })
  })
  return Array.from(notes)
}
