import { isNil } from '../model/isNil'
import { FretboardLocation, PitchedNote } from '../model/types'
import { Note, distance, Interval } from 'tonal'

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
    .map((string) => {
      const fret = Interval.semitones(distance(string, note))
      return {
        fret,
        note,
        string: tuning.indexOf(string) + 1,
      }
    })
    .filter(({ fret }) => fret <= 24)
  if (!allowEmpty && locations.length === 0) {
    throw new TypeError(`Can't place ${note} in tuning: ${tuning.join(', ')}`)
  }
  return locations
}
