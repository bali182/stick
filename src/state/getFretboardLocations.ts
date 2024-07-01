import { FretboardLocation, PitchedNote } from '../model/types'
import { Note, distance, Interval } from 'tonal'
import { isNil } from '../model/utils'

export function getFretboardLocations(
  note: PitchedNote,
  tuning: PitchedNote[],
  allowEmpty: boolean = true,
): FretboardLocation[] {
  const locations = tuning
    .filter((string) => {
      const noteHz = Note.freq(note)
      const stringHz = Note.freq(string)
      return !isNil(noteHz) && !isNil(stringHz) && noteHz >= stringHz
    })
    .map((string, index) => {
      const fret = Interval.semitones(distance(string, note))
      return {
        fret,
        note,
        string: index + 1,
      }
    })
    .filter(({ fret }) => fret <= 24)
  if (!allowEmpty && locations.length === 0) {
    throw new TypeError(`Can't place ${note} in tuning: ${tuning.join(', ')}`)
  }
  return locations
}
