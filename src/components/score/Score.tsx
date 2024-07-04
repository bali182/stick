import { useRef, useEffect, FC, useState, useMemo } from 'react'
import { AlphaTabApi, synth } from '@coderline/alphatab'
import { ATTrack } from '../../alphaTex/model'
import { toAlphaTex } from '../../alphaTex/toAlphaTex'
import { useDispatch, useSelector } from 'react-redux'
import { getAlphaTexModel } from '../../state/getAlphaTexModel'
import { AppDispatch, AppState } from '../../state/store'
import { alphaTabConfig } from './alphaTabConfig'
import { css } from '@emotion/css'
import { AlphaTabLogo } from './AlphaTabLogo'
import { LoopButton, PlayButton, StopButton } from './ScoreControls'
import { ScoreOverlay } from './ScoreOverlay'
import { VolumeSlider } from './VolumeSlider'
import { ConfigState, updateConfig } from '../../state/config'
import { isNil } from '../../model/isNil'

export type ScoreProps = {
  progressionId: string
}

const bottomBarStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 10px;
  height: 160px;
  width: 100%;
  background-color: #ffffff15;
`

export const Score: FC<ScoreProps> = ({ progressionId }) => {
  const wrapperRef = useRef<HTMLElement>(null)
  const mainRef = useRef<HTMLElement>(null)
  const apiRef = useRef<AlphaTabApi>()

  const [isLoading, setLoading] = useState(false)
  const [isPlaying, setPlaying] = useState(false)

  const alphaTexModel = useSelector<AppState, ATTrack>((state) =>
    getAlphaTexModel(state, progressionId),
  )
  const { isLooping, volume } = useSelector<AppState, ConfigState>(
    (state) => state.config,
  )

  const dispatch = useDispatch<AppDispatch>()

  const tex = useMemo(() => toAlphaTex(alphaTexModel), [alphaTexModel])

  useEffect(() => {
    const { current: api } = apiRef
    api?.tex?.(tex)
  }, [tex])

  useEffect(() => {
    const { current: api } = apiRef
    if (!isNil(api)) {
      api.isLooping = isLooping
    }
  }, [isLooping])

  useEffect(() => {
    const { current: api } = apiRef
    if (!isNil(api)) {
      api.masterVolume = volume
    }
  }, [volume])

  useEffect(() => {
    const api = new AlphaTabApi(mainRef.current!, alphaTabConfig)

    api.renderStarted.on(() => setLoading(true))
    api.renderFinished.on(() => setLoading(false))
    api.playerStateChanged.on(({ state }) =>
      setPlaying(state === synth.PlayerState.Playing),
    )

    api.render()
    api.tex(tex)
    api.masterVolume = volume
    api.isLooping = isLooping
    apiRef.current = api

    return () => api.destroy()
  }, [])

  const onPlayPause = () => apiRef.current?.playPause()
  const onLoop = () => dispatch(updateConfig({ isLooping: !isLooping }))
  const onStop = () => apiRef.current?.stop()
  const onVolumeChange = (volume: number) => dispatch(updateConfig({ volume }))

  return (
    <div className="at-wrap" ref={wrapperRef as any}>
      <ScoreOverlay isVisible={isLoading} />
      <div className="at-content">
        <div className="at-viewport">
          <div className="at-main" ref={mainRef as any}></div>
        </div>
      </div>
      <div className={bottomBarStyle}>
        <VolumeSlider value={volume} onChange={onVolumeChange} />
        <StopButton onClick={onStop} />
        <PlayButton onClick={onPlayPause} isToggled={isPlaying} />
        <LoopButton onClick={onLoop} isToggled={isLooping} />
        <AlphaTabLogo />
      </div>
    </div>
  )
}
