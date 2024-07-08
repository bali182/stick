import { ATBar, ATChord, ATChordNote, ATTrack } from '../../alphaTex/model'
import { GUITAR_TUNING } from '../../model/constants'
import { _AccompanimentBar, _BarPitches } from '../../model/types'

export function getAlphaTexChords(bars: _AccompanimentBar[]): ATTrack {
  return {
    tuning: GUITAR_TUNING,
    instrument: 'AcousticGrandPiano',
    clef: 'Treble',
    name: 'Chords',
    shortName: '',
    keySignature: 'C',
    timeSignature: { bottom: 4, top: 4 },
    bars: bars.map((bar): ATBar => {
      const items = bar.chords.map(
        ({ duration, pitches }): ATChord => ({
          type: 'chord',
          duration,
          notes: pitches.map(
            ({ fret, string }): ATChordNote => ({ fret, string }),
          ),
        }),
      )
      return { items }
    }),
  }
}
