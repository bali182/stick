import { d } from './note'
import { PitchedNote } from './types'

export function getTotalNoteDistance(notes: PitchedNote[]): number {
  let distance = 0
  for (let i = 0; i < notes.length; i += 1) {
    if (i + 1 >= notes.length) {
      break
    }
    distance += d(notes[i]!, notes[i + 1]!)
  }
  return distance
}
