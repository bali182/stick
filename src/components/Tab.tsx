import { useRef, useEffect, FC, useState, useMemo } from 'react'
import { AlphaTabApi, CoreSettings, PlayerSettings } from '@coderline/alphatab'
import { ATTrack } from '../alphaTex/model'
import { toAlphaTex } from '../alphaTex/toAlphaTex'
import { isNil } from '../model/utils'
import { Duration } from '../model/types'
import { useSelector } from 'react-redux'
import { getAlphaTexModel } from '../state/getAlphaTexModel'
import { AppState } from '../state/store'

export type TabProps = {
  id: string
  progressionId: string
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

export const Tab: FC<TabProps> = ({ id, progressionId }) => {
  const containerDom = useRef<HTMLElement>(null)
  const apiRef = useRef<AlphaTabApi>()
  const alphaTexModel = useSelector<AppState, ATTrack>((state) =>
    getAlphaTexModel(state, progressionId),
  )

  const tex = useMemo(() => toAlphaTex(alphaTexModel), [alphaTexModel])

  useEffect(() => {
    const { current: api } = apiRef
    if (isNil(api)) {
      return
    }
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
      <div id={id} ref={containerDom as any}></div>
    </div>
  )
}
