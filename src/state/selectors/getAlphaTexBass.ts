import { ATBar, ATNote, ATTrack } from '../../alphaTex/model'
import { _BarPitches, PitchedNote } from '../../model/types'

export function getAlphaTexBass(
  bars: _BarPitches[],
  tuning: PitchedNote[],
): ATTrack {
  return {
    tuning,
    instrument: 'AcousticBass',
    clef: 'Bass',
    name: 'Bass',
    shortName: '',
    keySignature: 'C',
    timeSignature: { bottom: 4, top: 4 },
    bars: bars.map(({ chords }): ATBar => {
      const items = chords
        .flatMap((chord) => chord.pitches)
        .map(
          ({ duration, fret, string, meta }): ATNote => ({
            type: 'note',
            duration,
            fret,
            string,
            label: meta,
          }),
        )
      return { items }
    }),
  }
}
