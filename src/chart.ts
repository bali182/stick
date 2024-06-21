import { ChordProgression } from './chartModel'

export const chart: ChordProgression = {
  bars: [
    {
      chords: [{ name: 'A', type: 'MAJOR-SEVENTH' }],
    },
    {
      chords: [
        { name: 'C', type: 'MAJOR' },
        { name: 'D', type: 'HALF-DIMINISHED' },
      ],
    },
    {
      chords: [{ name: 'E', type: 'MINOR' }],
    },
    {
      chords: [
        { name: 'B', type: 'MAJOR' },
        { name: 'B', type: 'MAJOR-SEVENTH' },
      ],
    },
    {
      chords: [{ name: 'A', type: 'MAJOR' }],
    },
    {
      chords: [{ name: 'C', root: 'G', type: 'MINOR-SEVENTH' }],
    },
    {
      chords: [{ name: 'C', type: 'DIMINISHED' }],
    },
  ],
}
