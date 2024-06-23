import { nanoid } from 'nanoid'
import { ChordProgression } from './chartModel'
import {
  toAnyAscDescHigherChrom,
  toAnyAscDescLowerChrom,
  toAnyAscHigherChrom,
  toAnyHigherChrom,
  toAnyLowerChrom,
} from './strategies/chordTonesWithChromaticLeadingTone'

export const defaultChordProgression: ChordProgression = {
  id: nanoid(),
  bars: [
    {
      id: nanoid(),
      chords: [
        {
          id: nanoid(),
          name: 'D',
          type: 'MINOR',
          path: toAnyAscDescHigherChrom.id,
        },
      ],
    },
    {
      id: nanoid(),
      chords: [
        {
          id: nanoid(),
          name: 'F',
          type: 'MAJOR',
          path: toAnyAscHigherChrom.id,
        },
      ],
    },
    {
      id: nanoid(),
      chords: [
        {
          id: nanoid(),
          name: 'Bb',
          type: 'MAJOR',
          path: toAnyAscDescLowerChrom.id,
        },
      ],
    },
    {
      id: nanoid(),
      chords: [
        {
          id: nanoid(),
          name: 'G',
          type: 'MAJOR',
          path: toAnyLowerChrom.id,
        },
        {
          id: nanoid(),
          name: 'A',
          type: 'DOMINANT-SEVENTH',
          path: toAnyHigherChrom.id,
        },
      ],
    },
    {
      id: nanoid(),
      chords: [
        {
          id: nanoid(),
          name: 'D',
          type: 'MINOR',
        },
      ],
    },
  ],
}
