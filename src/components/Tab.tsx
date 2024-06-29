import { useRef, useEffect, FC, useState, useMemo } from 'react'
import {
  AlphaTabApi,
  CoreSettings,
  DisplaySettings,
  PlayerSettings,
  RenderingResources,
  StaveProfile,
} from '@coderline/alphatab'
import { ATTrack } from '../alphaTex/model'
import { toAlphaTex } from '../alphaTex/toAlphaTex'
import { isNil } from '../state/utils'

export type TabProps = {
  id: string
}

const modelA: ATTrack = {
  clef: 'Bass',
  instrument: 'AcousticBass',
  keySignature: 'Db',
  timeSignature: { top: 4, bottom: 4 },
  tempo: 140,
  bars: [
    {
      notes: [
        { duration: 4, string: 3, fret: 6, chord: 'Am (R)' },
        { duration: 4, string: 2, fret: 3, chord: '3' },
        { duration: 4, string: 2, fret: 3, chord: '5' },
        { duration: 4, string: 4, fret: 2, chord: 'C' },
      ],
    },
  ],
}

const modelB: ATTrack = {
  clef: 'Bass',
  instrument: 'AcousticBass',
  keySignature: 'Db',
  timeSignature: { top: 4, bottom: 4 },
  tempo: 140,
  bars: [
    {
      notes: [
        { duration: 4, string: 4, fret: 3 },
        { duration: 4, string: 2, fret: 1 },
        { duration: 4, rest: true },
        { duration: 4, string: 4, fret: 2 },
      ],
    },
    {
      notes: [
        { duration: 4, string: 3, fret: 3 },
        { duration: 4, string: 3, fret: 1 },
        { duration: 4, rest: true },
        { duration: 4, string: 4, fret: 3 },
      ],
    },
  ],
}

const core: Partial<CoreSettings> = {
  tex: true,
  fontDirectory: '/font/',
  engine: 'svg',
}

// Typings are unusable here
const display = {
  staveProfile: 'Default',
  barsPerRow: 8,
  scale: 1.4,
  justifyLastSystem: true,
  resources: {
    staffLineColor: '#ffffff80',
    barSeparatorColor: '#fff',
    mainGlyphColor: '#fff',
    secondaryGlyphColor: '#fff',
    scoreInfoColor: '#fff',
    barNumberColor: '#fff',
  },
}

const player: Partial<PlayerSettings> = {
  enableCursor: true,
  enableAnimatedBeatCursor: true,
  enableElementHighlighting: true,
  enablePlayer: true,
  enableUserInteraction: true,
  soundFont:
    'https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/soundfont/sonivox.sf2',
}

export const Tab: FC<TabProps> = ({ id }) => {
  const containerDom = useRef<HTMLElement>(null)
  const apiRef = useRef<AlphaTabApi>()
  const [a, setA] = useState(true)

  const tex = useMemo(() => toAlphaTex(a ? modelA : modelB), [a])

  useEffect(() => {
    const { current: api } = apiRef
    if (isNil(api)) {
      return
    }
    console.log(tex)
    api.tex(tex)
  }, [tex])

  useEffect(() => {
    const api = new AlphaTabApi(containerDom.current!, {
      core,
      display,
      player,
    })
    api.render()
    api.tex(tex)
    apiRef.current = api
  }, [id])

  return (
    <div>
      <button onClick={() => apiRef.current?.play()}>Play</button>
      <button onClick={() => apiRef.current?.pause()}>Pause</button>
      <button onClick={() => apiRef.current?.stop()}>Stop</button>
      <button onClick={() => setA(!a)}>Swap</button>
      <div id={id} ref={containerDom as any}></div>
    </div>
  )
}
