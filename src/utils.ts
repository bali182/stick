import { NoteName, PitchedNoteName } from './chartModel'

const ROOT_NOTES: Record<PitchedNoteName, boolean> = {
  E1: true,
  F1: true,
  'F#1': true,
  Gb1: true,
  G1: true,
  'G#1': true,
  Ab1: true,
  A1: true,
  'A#1': true,
  Bb1: true,
  B1: true,
  C2: true,
  'C#2': true,
  Db2: true,
  D2: true,
  'D#2': true,
  Eb2: true,
  E2: true,
  F2: true,
  'F#2': true,
  Gb2: true,
  G2: true,
  'G#2': true,
  Ab2: true,
  A2: true,
  'A#2': true,
  Bb2: true,
  B2: true,
  C3: true,
  'C#3': true,
  Db3: true,
  D3: true,
  'D#3': true,
  Eb3: true,
  E3: true,
  F3: true,
  'F#3': true,
  Gb3: true,
  G3: true,
}

const NOTES = Object.keys(ROOT_NOTES) as PitchedNoteName[]

export const PITCHED_NOTE_MAP = NOTES.reduce(
  (map: Record<NoteName, PitchedNoteName[]>, rootNote: PitchedNoteName) => {
    const note = rootNote.replace(/[0-9]+/g, '') as NoteName
    if (!Array.isArray(map[note])) {
      map[note] = []
    }
    map[note].push(rootNote)
    return map
  },
  {} as Record<NoteName, PitchedNoteName[]>,
)
