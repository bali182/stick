import { ATBar, ATNote, ATTrack } from '../../alphaTex/model'
import { configSlice } from '../config'
import { AppState } from '../types'
import { prepareAlphaTexModel } from './prepareAlphaTexModel'

export function getAlphaTexModel(
  state: AppState,
  progressionId: string,
): ATTrack {
  const tuning = configSlice.selectors.getTuning(state)
  const bars = prepareAlphaTexModel(state, progressionId)
  const track: ATTrack = {
    clef: 'Bass',
    instrument: 'AcousticBass',
    keySignature: 'C',
    timeSignature: { bottom: 4, top: 4 },
    tuning,
    bars: bars.map(({ chords }): ATBar => {
      const notes = chords
        .flatMap((chord) => chord.pitches)
        .map(
          ({ duration, fret, string, meta }): ATNote => ({
            duration,
            fret,
            string,
            chord: meta,
            // TODO so far not possible to rest
            rest: false,
          }),
        )
      return { notes }
    }),
  }
  return track
}
